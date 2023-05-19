import { Component } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
 
}
window.addEventListener("click", function(event: MouseEvent) {
  if (!(event.target instanceof Element && event.target.matches('.account-button'))) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i] as HTMLElement;
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
});