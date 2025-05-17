import { contacts, type Contact, type InsertContact } from "@shared/schema";

// Storage interface
export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  getContact(id: number): Promise<Contact | undefined>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private currentId: number;

  constructor() {
    this.contacts = new Map();
    this.currentId = 1;
  }

  async createContact(contactData: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const timestamp = new Date();
    
    // Create a complete Contact object with properly typed fields
    const contact: Contact = { 
      id,
      name: contactData.name,
      email: contactData.email,
      business: contactData.business || null,
      message: contactData.message,
      createdAt: timestamp 
    };
    
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
}

// Export a singleton instance
export const storage = new MemStorage();
