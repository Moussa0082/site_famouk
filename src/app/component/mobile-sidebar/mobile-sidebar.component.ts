import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { menuItems } from './data';
import { RouterLink } from '@angular/router';

interface MenuItem {
  title: string;
  link: string;
  subMenu?: MenuItem[];
  isOpen?: boolean
}
@Component({
  selector: 'app-mobile-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './mobile-sidebar.component.html',
  styles: ``
})
export class MobileSidebarComponent {
 
  @Input() isMenuOpen = false;
  @Output() closeMenuEvent = new EventEmitter<void>();
  menuItems: MenuItem[] = [];

  // constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get<MenuItem[]>('assets/menu.json').subscribe(data => {
      this.menuItems = menuItems;
    // });
  }

  closeSidebar() {
    this.closeMenuEvent.emit();
  }
  toggleSubMenu(item: MenuItem, event?: Event): void {
    if (event) {
      event.stopPropagation();  // Prevents click from propagating to the parent <a>
    }
  
    if (item.subMenu) {
      item.isOpen = !item.isOpen;
    }
  }
  
}
