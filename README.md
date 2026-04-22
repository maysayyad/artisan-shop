MIS2006 WEB PROGRAMMING
Project Milestone Report
Artisan Shop
Monitoring & Initial Prototype
Team Members & Roles
Sena Bayramcı — Authentication Module
Damlanur Bilgin — Database Connectivity
Aygusu Karsavuran — Project Integration & Report
Nurefşan Büyükyazıcı — Report Writing

Section 1: Project Objective and Scope
1.1 Project Summary
The Artisan Shop is a full-stack e-commerce web application designed to bridge the gap between independent artisans and their potential customers. In a market increasingly dominated by mass-produced goods, small-scale creators often lack the technical infrastructure and visibility needed to reach a wider audience. This platform was developed to directly address that gap.
Built on a Vite and React foundation, the application delivers a seamless, role-aware shopping experience for three distinct user types: administrators responsible for platform oversight, staff members managing product listings, and end users browsing and purchasing handcrafted goods. Each role is authenticated through Firebase and dynamically redirected to a tailored dashboard, ensuring both security and usability.
The platform integrates Firebase Firestore for real-time data management and Firebase Storage for media handling, enabling product listings to load dynamically with images, descriptions, and pricing. A global state management system implemented via React Context API ensures consistent session handling and smooth navigation across the application.
Beyond its technical implementation, the Artisan Shop represents a practical solution to a real-world problem — empowering local creators with a professional digital storefront that would otherwise require significant resources to build independently.

1.2 Core Functions
The following core functionalities were implemented in the initial prototype:
•	Role-Based Authentication: A login/logout system supporting three distinct roles — Admin, Staff, and User — each redirected to a dedicated dashboard upon authentication.
•	Live Database Integration: Firebase Firestore was integrated as the cloud database. The application demonstrates the ability to fetch product data and push updates in real time.
•	Firebase Storage: Product images are stored and retrieved via Firebase Storage, enabling dynamic image loading per product listing.
•	State Management: A global state solution using React Context API was implemented to manage authentication state and user session data across the application.
Section 2: Individual Contributions
2.1 Sena Bayramci — Authentication Module
The authentication module was implemented using Firebase Authentication. A role-based login system was developed, supporting Admin, Staff, and User roles. Upon successful login, programmatic redirection to the respective dashboard was achieved through React Router and the Context API. A ProtectedRoute component was constructed to restrict access to authorized roles only.
Technical Challenge: An issue was encountered during the implementation of role-based redirection, where all authenticated users were being redirected to the same route regardless of their assigned role. The root cause was identified as a race condition between the Firebase authentication state listener and the routing logic. The issue was resolved by introducing an authentication loading state that delayed routing until the user role was confirmed from Firestore.

2.2 Damlanur Bilgin — Database Connectivity
The database connectivity layer was established using Firebase Firestore. A product service module was developed to abstract all Firestore operations, including document fetching and real-time data synchronization. The productService file was structured to expose reusable async functions consumed by various components across the application.
Technical Challenge: A persistent error was encountered during the initial Firestore integration where data fetching returned empty results despite records existing in the database. Investigation revealed that Firestore security rules were configured to deny read access to unauthenticated users. The issue was resolved by updating the Firestore rules to permit read access for authenticated users and by ensuring the authentication state was confirmed before any data fetch was initiated.

2.3 Aygusu Karsavuran — Project Integration & Report
The overall project structure was assembled by integrating individual modules developed by each team member into a cohesive application. Merge conflicts arising from parallel development branches were identified and resolved. The application was tested end-to-end to verify that authentication, database connectivity, and UI components functioned correctly in combination. Additionally, contributions to the structure and formatting of the project report were made.
Technical Challenge: Significant merge conflicts were encountered when consolidating branches containing changes to shared files such as App.jsx and firebase.js. In particular, the User.jsx file contained unresolved conflict markers that caused a build failure. The conflicts were resolved by manually reviewing each section, selecting the correct version of the code, and removing all conflict markers before rebuilding the project.

2.4 Nurefşan Büyükyazıcı — Report Writing
The project report was researched, structured, and written in accordance with the MIS2006 milestone guidelines. Each section was composed using formal academic language in passive voice as required. The project objective, scope, and individual contributions were documented based on information gathered from team members. The report was reviewed for consistency, clarity, and compliance with submission requirements.
Technical Challenge: A difficulty was encountered in accurately documenting the technical contributions of team members who developed their modules independently. Coordination was required to collect detailed descriptions of each member's implementation approach and the specific errors they encountered. The challenge was addressed by conducting structured discussions with each contributor and cross-referencing the codebase to ensure technical accuracy in the documented descriptions.

MIS2006 Web Programming | Artisan Shop Project | 2026

