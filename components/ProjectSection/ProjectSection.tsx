import styles from "./ProjectSection.module.scss";
import Project from "@components/Project/Project";
import { project01ResponsiveHeaderData } from "./project01-responsive-header-data";
import { project02WebFormData } from "./project02-web-form-data";
import { project03MiniCartDrawer } from "./project03-mini-cart-drawer";
import { project04CareerSelector } from "./project04-career-selector";

export default function ProjectSection() {
    return (
        <div className={styles["projects"]}>
            <Project
                heading="01 - Responsive Header and Navigation Menu"
                description="Built from the ground up for a Shopify Plus ecommerce store. Nested sliding drawers on mobile and full width drop down mega menu on desktop. Features seamless sticky scrolling functionality. Dynamic links and text sourced from Shopify CMS. Created to match a Figma mock supplied by an internal UI team."
                tagData={project01ResponsiveHeaderData}
                mobileImg="/assets/imgs/project01-capture-mobile-menu-expanded.jpg"
                desktopImg="/assets/imgs/project01-capture-desktop-menu-expanded.jpg"
            />
            <Project
                heading="02 - Web Form Landing Page Template"
                description="Reusable responsive page template featuring a web form. Form hosted through a third party and embedded into HTML. Custom SASS to match site and brand style guidelines. Edits to page content or form embed link available through Shopify CMS."
                tagData={project02WebFormData}
                mobileImg="/assets/imgs/project02-capture-mobile-form.jpg"
                desktopImg="/assets/imgs/project02-capture-desktop-form.jpg"
            />
            <Project
                heading="03 - Mini Cart Drawer Dynamic Product Recommendations"
                description='Dynamic "Frequently Bought Together" section in mini cart drawer for product upsell opportunities. Data sourced from CMS on per product basis. Add button removes product from the list and shifts up to the cart section.'
                tagData={project03MiniCartDrawer}
            >
                <img
                    className={styles["project-single-capture"]}
                    src="/assets/imgs/project03-capture-mini-cart-drawer.jpg"
                    alt="Desktop website screen capture"
                    width="843"
                    height="2017"
                ></img>
            </Project>
            <Project
                heading="04 - Career Selector Form and Results Page"
                description="Form to determine user aviation career path options based on user experience and details. Results page features recommended information cards. Persistant state in local storage to save responses and animations built with Motion."
                tagData={project04CareerSelector}
                mobileImg="/assets/imgs/project04-capture-mobile-career-selector.png"
                desktopImg="/assets/imgs/project04-capture-desktop-career-selector.png"
                mobileImg2="/assets/imgs/project04-capture-mobile-career-selector2.png"
                desktopImg2="/assets/imgs/project04-capture-desktop-career-selector2.png"
            />
            <Project heading="More Coming Soon" description="Stay tuned for updates with more projects." />
        </div>
    );
}
