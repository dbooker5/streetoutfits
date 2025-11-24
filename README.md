# Street Outfits

Street Outfits is a modern, high-performance e-commerce application designed for streetwear enthusiasts. Built with the latest web technologies, it offers a seamless shopping experience with a focus on speed, design, and usability.

## 🚀 Features

- **Modern Tech Stack**: Built on Next.js 16 and React 19 for cutting-edge performance and developer experience.
- **Responsive Design**: Beautifully styled with Tailwind CSS v4, ensuring a great look on all devices.
- **Robust Database**: Powered by Neon Serverless PostgreSQL and managed with Drizzle ORM for type-safe database interactions.
- **Secure Authentication**: Integrated with Better Auth for secure and flexible user authentication.
- **State Management**: Efficient global state management using Zustand.
- **Product Management**: Browse and view products with a dedicated schema and database seeding.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [Neon PostgreSQL](https://neon.tech/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)

## 🏁 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v20 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/streetoutfits.git
    cd streetoutfits
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Setup**

    Create a `.env.local` file in the root directory and add your environment variables. You can use `.env.example` as a reference if available.

    ```env
    DATABASE_URL=your_neon_database_url
    # Add other necessary variables
    ```

4.  **Database Setup**

    Generate the migrations and push them to your database:

    ```bash
    npm run db:generate
    npm run db:migrate
    ```

    Seed the database with initial data:

    ```bash
    npm run db:seed
    ```

5.  **Run the Development Server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest improvements.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please file an issue on the [GitHub Issues](https://github.com/yourusername/streetoutfits/issues) page.

## 👥 Maintainers

- **Street Outfits Team** - [Maintainer Profile](https://github.com/yourusername)

---

Built with ❤️ by the Street Outfits Team.
