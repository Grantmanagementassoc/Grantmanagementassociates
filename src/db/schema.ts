import { pgTable, serial, text, timestamp, integer, jsonb, boolean } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  organization: text("organization"),
  serviceInterest: text("service_interest"),
  budget: text("budget"),
  message: text("message").notNull(),
  status: text("status").default("new").notNull(),
  assignedTo: integer("assigned_to"),
  internalNotes: text("internal_notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  source: text("source"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const assessmentResponses = pgTable("assessment_responses", {
  id: serial("id").primaryKey(),
  organizationName: text("organization_name").notNull(),
  organizationType: text("organization_type"),
  industry: text("industry"),
  projectDescription: text("project_description"),
  fundingAmount: text("funding_amount"),
  timeline: text("timeline"),
  priorGrants: text("prior_grants"),
  contactName: text("contact_name").notNull(),
  contactEmail: text("contact_email").notNull(),
  contactPhone: text("contact_phone"),
  score: integer("score"),
  recommendations: text("recommendations").array(),
  status: text("status").default("new").notNull(),
  assignedTo: integer("assigned_to"),
  internalNotes: text("internal_notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  roleSlug: text("role_slug").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  linkedinUrl: text("linkedin_url"),
  coverLetter: text("cover_letter"),
  resumeUrl: text("resume_url"),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").default("staff").notNull(),
  permissions: jsonb("permissions").$type<string[]>().default([]).notNull(),
  active: boolean("active").default(true).notNull(),
  lastLoginAt: timestamp("last_login_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const adminSessions = pgTable("admin_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  tokenHash: text("token_hash").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  body: text("body").notNull(),
  category: text("category").default("Insight").notNull(),
  author: text("author").notNull(),
  featuredImage: text("featured_image"),
  imageAlt: text("image_alt"),
  tags: jsonb("tags").$type<string[]>().default([]).notNull(),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  status: text("status").default("draft").notNull(),
  featured: boolean("featured").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  createdBy: integer("created_by"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const employeeTasks = pgTable("employee_tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  assignedTo: integer("assigned_to").notNull(),
  createdBy: integer("created_by").notNull(),
  status: text("status").default("todo").notNull(),
  priority: text("priority").default("normal").notNull(),
  dueAt: timestamp("due_at"),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
