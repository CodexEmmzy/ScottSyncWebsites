import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contact = await storage.createContact(contactData);
      
      // Return success response
      res.status(201).json({ 
        success: true, 
        message: 'Contact message received successfully',
        id: contact.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: 'Validation error', 
          errors: formattedError
        });
      }
      
      console.error('Error handling contact submission:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
