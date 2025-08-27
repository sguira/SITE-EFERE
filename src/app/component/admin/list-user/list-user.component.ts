import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  dateCreation: Date;
}

// Exemple de données
const USER_DATA: User[] = [
  {
    id: 1,
    name: 'Alice Dubois',
    email: 'alice@example.com',
    role: 'Admin',
    dateCreation: new Date('2024-09-01'),
  },
  {
    id: 2,
    name: 'Bob Martin',
    email: 'bob@example.com',
    role: 'User',
    dateCreation: new Date('2024-09-05'),
  },
  {
    id: 3,
    name: 'Charlie Lefevre',
    email: 'charlie@example.com',
    role: 'User',
    dateCreation: new Date('2024-08-20'),
  },
  {
    id: 4,
    name: 'Diana Moreau',
    email: 'diana@example.com',
    role: 'Premium',
    dateCreation: new Date('2024-10-15'),
  },
  {
    id: 5,
    name: 'Ethan Garcia',
    email: 'ethan@example.com',
    role: 'User',
    dateCreation: new Date('2024-10-10'),
  },
  {
    id: 6,
    name: 'Fiona Bertrand',
    email: 'fiona@example.com',
    role: 'Admin',
    dateCreation: new Date('2024-07-25'),
  },
  {
    id: 7,
    name: 'George Duval',
    email: 'george@example.com',
    role: 'User',
    dateCreation: new Date('2024-09-28'),
  },
  {
    id: 8,
    name: 'Hannah Petit',
    email: 'hannah@example.com',
    role: 'Premium',
    dateCreation: new Date('2024-08-10'),
  },
  {
    id: 9,
    name: 'Ivan Leroy',
    email: 'ivan@example.com',
    role: 'User',
    dateCreation: new Date('2024-10-02'),
  },
  {
    id: 10,
    name: 'Juliette Roux',
    email: 'juliette@example.com',
    role: 'User',
    dateCreation: new Date('2024-09-12'),
  },
  // ... ajouter plus d'utilisateurs si nécessaire
];

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent {
  // --- Données et Affichage ---
  allUsers: User[] = USER_DATA;
  filteredUsers: User[] = [];
  displayedUsers: User[] = [];

  // --- Recherche, Tri et Pagination ---
  searchQuery: string = '';
  sortColumn: keyof User | '' = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  currentPage = 1;
  pageSize = 5;
  totalPages = 0;

  showModal: boolean = false;

  suscriptionForm?: FormGroup;

  periodicite: any[] = [];
  isLoading = true;

  constructor(public adminService: AdminService, public fb: FormBuilder) {}

  async ngOnInit() {
    this.processData();

    // this.adminService.getUsers().subscribe((users) => {
    //   this.allUsers = users;
    //   console.log(users);
    //   this.processData();
    // });

    this.suscriptionForm = this.fb.group({
      email: ['', Validators.required],
      plan: ['', Validators.required],
    });
    this.isLoading = true;
    await this.adminService.getUsers().subscribe((value) => {
      this.allUsers = value as any[];
      this.processData();

      this.adminService.AbonnementPeriodicite().subscribe((data: any) => {
        this.periodicite = data;
        console.log('Périodicités chargées :', this.periodicite);
        this.isLoading = false;
      });
    });
  }

  onSelect(event: Event) {}

  /**
   * Applique le filtre de recherche, le tri et la pagination.
   */
  processData(): void {
    let tempUsers = [...this.allUsers];

    // 1. FILTRAGE
    if (this.searchQuery) {
      tempUsers = tempUsers.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    this.filteredUsers = tempUsers;

    // 2. TRI
    if (this.sortColumn) {
      this.sortData({
        active: this.sortColumn as string,
        direction: this.sortDirection,
      });
    }

    // 3. PAGINATION
    this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedUsers = this.filteredUsers.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  /**
   * Gère le changement de recherche.
   */
  onSearchChange(): void {
    this.currentPage = 1; // Retour à la première page après la recherche
    this.processData();
  }

  /**
   * Gère le changement de tri.
   */
  sortData(sort: any): void {
    this.sortColumn = sort.active as keyof User;
    this.sortDirection = sort.direction as 'asc' | 'desc';

    // Si la direction est vide, nous revenons au tri par ID (ou date) par défaut.
    if (!sort.direction) {
      this.sortColumn = '';
      this.processData();
      return;
    }

    // Fonction de tri
    this.filteredUsers.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const column = sort.active as keyof User;

      switch (column) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'dateCreation':
          return this.compare(
            a.dateCreation.getTime(),
            b.dateCreation.getTime(),
            isAsc
          );
        default:
          return 0;
      }
    });

    this.processData();
  }

  /**
   * Fonction utilitaire pour la comparaison.
   */
  private compare(
    a: number | string,
    b: number | string,
    isAsc: boolean
  ): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  /**
   * Gère le changement de page.
   */
  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.processData();
    }
  }

  closeRenouvellementModal() {}

  submitRenouvellement() {}

  /**
   * Créer un tableau de numéros de page pour la pagination Bootstrap.
   */
  get pageNumbers(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  openRenouvellementModal(email: string) {
    this.showModal = true;
    this.suscriptionForm?.get('email')?.setValue(email);
  }

  closeModal() {
    this.showModal = false;
  }

  closed(event: any) {
    this.showModal = event;
  }
=======
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {

  users:any=[]

  constructor(public admin:AdminService){}

  ngOnInit(): void {

    this.admin.getUsers().subscribe((e)=>{
      console.log(e)
      this.users=e
    })

  }

>>>>>>> 231d21a (projet efere)
}
