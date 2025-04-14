import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '../../../service/applicationService';
import { DesignerService } from '../../../service/designerService';
import { ChartModule } from 'primeng/chart';
import { ProductService } from '../../../service/productservice';
import { minMaxTotal } from '../../../domain/minMaxTotal';
import { Input } from '@angular/core';

@Component({
    selector: 'histogramm',
    templateUrl: './diagramm.component.html',
    standalone: true,
    imports: [ChartModule]
})
export class Diagramm implements OnInit {
    @Input() products : minMaxTotal = {total:0,minimum:0,maximum:0}

    basicData: any;

    basicOptions: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(
        private cd: ChangeDetectorRef,
        private productService: ProductService,
    ) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                
            }
        }
    });

    ngOnInit() {
         this.productService.getMinMaxTotal().subscribe(
            {
            next: (data) => {
              this.products = data;
              console.log('Utilisateurs récupérés :', this.products);
              this.initChart()
            },
            error: (err) => {
              console.error('Erreur lors de la récupération des utilisateurs', err);
            }
          }
        );
    }

    initChart() {
        // console.log("produit ato",this.products);
        
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.basicData = {
                labels: ['min','max','total'],
                datasets: [
                    {
                        label: 'Sales',
                        data : [this.products.minimum, this.products.maximum, this.products.total],
                        backgroundColor: [
                            'rgba(249, 115, 22, 0.2)',
                            'rgba(6, 182, 212, 0.2)',
                            'rgb(107, 114, 128, 0.2)'
                        ],
                        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                        borderWidth: 1,
                    },
                ],
            };

            this.basicOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                },
            };
            this.cd.markForCheck()
        }
    }
}