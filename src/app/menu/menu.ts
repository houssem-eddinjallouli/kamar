import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  entrees = [
{ name: 'Salade Tunisienne', price: 6, description: 'Tomate, concombre, oignon, œuf' },
{ name: "Brik à l'œuf", price: 5, description: 'Feuille brik, œuf, thon' },
{ name: 'Soupe Harira', price: 7, description: 'Soupe traditionnelle aux légumes et lentilles' },
{ name: 'Salade Méchouia', price: 6, description: 'Poivrons grillés, tomates, oignons, huile d\'olive' },
{ name: 'Mini Pizza', price: 8, description: 'Petite pizza garnie de fromage et tomates' }
];


plats = [
{ name: 'Escalope Grillée', price: 14, description: 'Servie avec frites et salade' },
{ name: 'Pâtes Bolognaise', price: 12, description: 'Sauce tomate, viande hachée' },
{ name: 'Couscous Royal', price: 18, description: 'Semoule, viande, légumes, pois chiches' },
{ name: 'Grillade Mixte', price: 20, description: 'Viande variée grillée avec accompagnement' },
{ name: 'Tajine Poulet Citron', price: 16, description: 'Poulet mijoté aux citrons confits et olives' }
];


desserts = [
{ name: 'Fondant au chocolat', price: 6, description: 'Cœur coulant' },
{ name: 'Salade de fruits', price: 5, description: 'Fruits de saison' },
{ name: 'Baklava', price: 7, description: 'Pâtisserie feuilletée aux noix et miel' },
{ name: 'Crème Caramel', price: 5, description: 'Dessert crémeux avec caramel' },
{ name: 'Tarte aux pommes', price: 6, description: 'Tarte sucrée aux pommes fraîches' }
];


boissons = [
{ name: 'Coca-Cola', price: 3, description: 'Canette de 33cl' },
{ name: 'Jus d\'orange', price: 4, description: 'Jus frais pressé' },
{ name: 'Thé à la menthe', price: 2.5, description: 'Thé traditionnel avec menthe fraîche' },
{ name: 'Café', price: 2, description: 'Café noir ou express' },
{ name: 'Eau minérale', price: 1.5, description: 'Bouteille 50cl' }
];
}
