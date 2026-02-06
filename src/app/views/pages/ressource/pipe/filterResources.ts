import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterResources' })
export class FilterResourcesPipe implements PipeTransform {
  transform(resources: any[], searchTerm: string, theme: string): any[] {
    if (!resources) return [];
    return resources.filter(r => {
      const matchesSearch = !searchTerm || r.title.toLowerCase().includes(searchTerm.toLowerCase()) || r.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTheme = !theme || r.theme === theme;
      return matchesSearch && matchesTheme;
    });
  }
}
