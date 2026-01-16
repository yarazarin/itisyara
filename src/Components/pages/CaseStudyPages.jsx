import React from "react";
import "./CaseStudyPages.css";
import Joinimg from "./Joinimg";

export const Page1 = () => (
    <div className="page-1-custom wheel-pages_All">
        <div className="cardex-page-1">
            <h1 className="page-1-h1">
                1. The day the idea was born
            </h1>
            <p className="page-1-p">
                It all started on a rainy evening when my
                client said, “I don’t just want a blog; I
                want a living journal of my thoughts.” I
                knew a simple template wouldn’t be enough,
                so I decided to build a custom MERN
                application from scratch, something that
                could grow with their ideas instead of
                limiting them.
            </p>
        </div>
        <Joinimg />
    </div>
);

/**
 * Page 2 of the Case Study page, currently a blank page.
 * You can add your content here.
 */


export const Page2 = () => (
    <div className="page-2-custom wheel-pages_All">
        <div className="cardex-page-2">
            <h1 className="page-2-h1">
                3. Choosing the MERN toolbox
            </h1>
            <p className="page-2-p">
                Imagine you want to build a tree-house that
                can be expanded later: you don’t use random
                pieces of wood, you choose a system. That is
                why I picked MongoDB, Express, React, and
                Node.js together, because they speak the
                same “JavaScript” language and make it easy
                to go from idea to a working, scalable
                product without constantly switching mental
                gears.
            </p>
        </div>
    </div>
);

export const Page3 = () => (
    <div className="page-3-custom wheel-pages_All">
        <div className="cardex-page-3">
            <h1 className="page-3-h1">
                4. Planning the brain: MongoDB & models
            </h1>
            <p className="page-3-p">
                Before drawing a single pixel, I designed
                how the data would live in the database,
                like planning the shelves and boxes in a
                library. I used MongoDB with clear schemas
                for posts, users, and visits, so every
                title, tag, date, and view could be stored
                in a structured way but still stay flexible
                for future features like new content types
                or advanced filters.
            </p>
        </div>
    </div>
);

export const Page4 = () => (
    <div className="page-4-custom wheel-pages_All">
        <div className="cardex-page-4">
            <h1 className="page-4-h1">
                5. Building the backbone: Node.js and
                Express
            </h1>
            <p className="page-4-p">
                Next, I built the “roads” that every piece
                of data travels on using Node.js and
                Express, like creating safe highways between
                the client and the server. I organized
                routes for authentication, posts, tags, and
                analytics, so the frontend could ask clear
                questions—“give me all posts,” “log this
                visit,” “verify this user”—and always get a
                reliable, secure answer.
            </p>
        </div>
    </div>
);

export const Page5 = () => (
    <div className="page-5-custom wheel-pages_All">
        <div className="cardex-page-5">
            <h1 className="page-5-h1">
                6. Guarding the gates: auth and security
            </h1>
            <p className="page-5-p">
                Because this wasn’t a toy project, I treated
                security like a castle with guarded gates
                instead of an open field. I used JSON Web
                Tokens to protect private routes, verified
                user credentials with hashed passwords, and
                separated secrets like database URLs and
                email credentials into environment
                variables, so even if someone peeked at the
                code, the real keys to the kingdom stayed
                hidden.
            </p>
        </div>
    </div>
);

export const Page6 = () => (
    <div className="page-6-custom wheel-pages_All">
        <div className="cardex-page-6">
            <h1 className="page-6-h1">
                7. Teaching the app to see: analytics
                middleware
            </h1>
            <p className="page-6-p">
                I wanted the app not just to exist, but to
                learn from its visitors, like a shopkeeper
                who remembers who comes in and from where.
                With a custom analytics middleware, the
                server logs visit details such as IP,
                country, device type, and page path into a
                Visit collection, which later powers
                dashboards so the client can see which posts
                are loved and where their audience lives.
            </p>
        </div>
    </div>
);

export const Page7 = () => (
    <div className="page-7-custom wheel-pages_All">
        <div className="cardex-page-7">
            <h1 className="page-7-h1">
                8. Crafting the face: React UI
            </h1>
            <p className="page-7-p">
                Once the brain and backbone were ready, it
                was time to design the “face” people would
                actually see and touch, using React for a
                smooth, app-like experience. I built
                reusable components for navigation, post
                lists, post details, tags, and the footer,
                so the interface feels consistent, fast, and
                easy to extend whenever a new section or
                feature is needed.
            </p>
        </div>
    </div>
);

export const Page8 = () => (
    <div className="page-8-custom wheel-pages_All">
        <div className="cardex-page-8">
            <h1 className="page-8-h1">
                9. Making it beautiful and readable
            </h1>
            <p className="page-8-p">
                Good storytelling needs a good stage, so I
                focused on typography, spacing, and motion
                to keep readers comfortable. Custom fonts,
                gentle shadows, responsive layouts with
                Bootstrap, and direction-aware content
                (supporting both English and Persian) make
                long posts feel pleasant to read, even on
                small screens, turning the app into a cozy
                reading room instead of a noisy dashboard.
            </p>
        </div>
    </div>
);

export const Page9 = () => (
    <div className="page-9-custom wheel-pages_All">
        <div className="cardex-page-9">
            <h1 className="page-9-h1">
                10. Giving the writer superpowers: editor &
                tags
            </h1>
            <p className="page-9-p">
                For the client, writing inside the app had
                to feel like using a friendly digital
                notebook, not like wrestling with code. With
                a rich text editor and a flexible tagging
                system, they can format their stories, add
                images, choose tags like “Technology” or
                “Life,” and even mark special posts for a
                manual “featured” section, all without ever
                thinking about the database behind the
                scenes.
            </p>
        </div>
    </div>
);

export const Page10 = () => (
    <div className="page-10-custom wheel-pages_All">
        <div className="cardex-page-10">
            <h1 className="page-10-h1">
                10. Showing the results: analytics dashboard
            </h1>
            <p className="page-10-p">
                Finally, I turned all the tracked visits
                into visual stories using charts, tables,
                and filters that reveal patterns over time.
                The analytics page lets the client see total
                views, countries, and devices at a glance,
                almost like watching their blog light up on
                a world map, so they can make smart
                decisions about what to write next and how
                to serve their readers better.
            </p>
        </div>
    </div>
);
