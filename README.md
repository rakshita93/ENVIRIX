# ENVIRIX
Enviryx is an AI-powered platform that crowdsources civic and disaster issues via text, images, videos, and location data. It validates, prioritizes, and geospatially matches each issue with the right universities, researchers, or industry partners — turning public complaints into actionable, trackable solutions.
Enviryx is a digital platform developed by Team Affinity for Smart India Hackathon 2026 (Problem Statement ID: SIH26043, Theme: Smart Education, Category: Software) that connects communities, local authorities, and institutions on one unified platform to surface disaster and civic issues.

How it works:
Citizens and Urban Local Bodies (ULBs) submit challenges using text, images, videos, and location data. An AI and geospatial engine then screens each submission — classifying, validating, prioritizing, and deduplicating it based on impact, severity, and recurrence. The system maps issues geospatially through hotspot analysis and trend identification, then matches each challenge with the most suitable universities, research labs, experts, startups, or industry partners based on domain, location, and capacity.

What makes it unique:
Most complaint portals stop at reporting. Enviryx goes further with a Societal Challenge Graph that links each issue through a chain: Challenge → Location → Expertise → University → Industry → Solution → Impact. This provides explainable AI-based matching, showing exactly who is best suited to solve a given challenge while enabling collaborative, trackable outcomes — from problem reporting all the way to piloted solutions and measured real-world impact.

Technical approach:

Frontend: React.js, Tailwind CSS
Backend: Django REST Framework (Python)
Database: PostgreSQL + PostGIS (Geo)
AI/ML: Python, PyTorch, Transformers
Geospatial: GeoPandas, Folium/Leaflet
Cloud & Storage: AWS S3, EC2, Cloudinary

The methodology follows a seven-step process: Challenge Submission → AI Validation & Analysis → Prioritize & Map → Match with Institutions → Collaborate & Develop → Pilot & Deploy → Measure Impact.

Feasibility:
The solution holds a 92% feasibility score, is achievable within a 6-month timeframe, is cost-effective using open-source tools and cloud services, and aligns with real-world SIH goals. Key risks — data quality, AI/geospatial complexity, privacy/security, and user adoption — are addressed through multi-level validation, modular architecture, encryption and RBAC-based access control, and awareness campaigns.

Impact and benefits:
Enviryx empowers citizens with faster issue resolution, helps government bodies make data-driven decisions, gives universities and researchers access to real-world problems for innovation, opens co-innovation opportunities for industry and startups, and improves coordination for NGOs and civil society. Its benefits span social (faster resolution of disaster, infrastructure, health, and education issues), economic (reduced operational costs, industry-academic partnerships), environmental (early risk identification, sustainability), innovation (AI + geospatial + crowdsourcing integration), and transparency (trackable, accountable outcomes).

In essence, Enviryx transforms scattered public complaints into structured, actionable leads — building a collaborative ecosystem that converts community-reported challenges into measurable, real-world impact.
