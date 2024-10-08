---
title: 'Tutorial: Create your first XM Cloud no-code component'
description: 'In this tutorial, we will go through the steps to create a Text Teaser component with a no-code approach using XM Cloud Components builder'
openGraphImage: '/images/getting-started/tutorials/xm-cloud/create-a-component-16.jpg'
pageType: 'tutorial'
menuOrder: 3
---

<Introduction title="What You are Going to Learn">

In this tutorial, we will go through the steps to create a Text Teaser component with a no-code approach using XM Cloud Components builder. The walkthrough will not show all possible options, but will take you through a flow to define and lay out a new Component to use on your home page. You will learn:

- How to create a collection for your components
- How to create a new Text Teaser component using the XM Cloud Components builder
- How to make the Text Teaser component available in the Pages editor for authors

</Introduction>

## Overview

Components are the visual, re-usable, building blocks to design web pages in XM Cloud. You can think of creating a component like creating a ‘stamp’ that you can use throughout a webpage. In this tutorial, you will build the first component in your project. We will use the XM Cloud Components builder, exploring the no-code approach to building components. No-code components, sometimes referred to as Front-End as a Service (FEaaS) components, are built using XM Cloud's user interface, allowing non-technical team members to help with the site management.

<Alert status="info">
   <AlertIcon />
   **NOTE:** For more advanced styling and building of components, you can also use a coded approach! Please refer to the [XM Cloud Accelerate article to learn more about creating React/Next.js components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components).
</Alert>

In this tutorial you will do the following:

1. Build a collection to organize components
1. Define the layout of a new XM Cloud component called Text Teaser
1. Make the component available to editors
1. Place the component into your existing webpage

<Alert status="info">
   <AlertIcon />
   **NOTE:** You are not creating a data model in this tutorial. That will be covered in an upcoming tutorial on [creating component data sources](datasources).
</Alert>

## Prerequisites

In order to complete the following tutorial, you will need these resources:

1. A valid organization login for the [Sitecore Cloud portal](https://portal.sitecorecloud.io)
1. An existing XM Cloud environment created in [Tutorial: How to Set Up and Utilize XM Cloud](setup-xm-cloud)
1. An existing XM Cloud site created in [Tutorial: How to Create a Site and Connect your App to it](create-a-site)

## What do we need to build?

The first component we want to build is the “Text Teaser” Component. The requirements from the customer design team are as follows:

- 2-column centered layout
- Within the first column there is a **headline (h2)** and a **sub-headline (h3)**.
- In the second column, there is a **paragraph text** with formatted text that can be handled by a rich text editor.
- Maximum width of 1320 pixels
- Use Roboto font for the headlines
- Use Open Sans font for the paragraph font.

This is what your component should look like when it is finished:

<Image title="Text Teaser Design" src="/images/getting-started/tutorials/xm-cloud/create-a-component-01.jpg" maxW="xl" />

In this tutorial you will focus on creating the initial definition of the component with the 2-column layout and the desired elements. The specific design requirements for styling will be covered in a later tutorial.

## Organizing components using collections

To structure the components a bit, you can use collections. Collections help you to navigate the components in the Components builder, but also later in Pages. You will now create a new collection named "Basic Components" to hold any components you will create.

1. To begin, open the Sitecore Cloud Portal (https://portal.sitecorecloud.io) and log in.

1. From your dashboard, select the XM Cloud environment where you will create your Text Teaser Component.

   <Image title="Sitecore Cloud - Select XM Cloud App" src="/images/getting-started/tutorials/xm-cloud/create-a-component-02.jpg" maxW="xl" />

1. From the app context flyout, select **Open App** to launch XM Cloud environment apps dashboard

   <Image title="Sitecore Cloud - Open XM Cloud Dashboard" src="/images/getting-started/tutorials/xm-cloud/create-a-component-03.jpg" maxW="xl" />

1. At the very top switch to **Tools**

1. In the **Tools** page, select the **Components** card to launch the Components builder. You can see that there are already some components available.

   <Image title="Components builder - Components overview" src="/images/getting-started/tutorials/xm-cloud/create-a-component-04.jpg" maxW="xl" />

1. On the top right, click **Add collection** to create a new collection.

   <Image title="Components builder - Add new Collection" src="/images/getting-started/tutorials/xm-cloud/create-a-component-05.jpg" maxW="xl" />

1. Name this collection: **“Basic Components”**

1. Click the **Save** button to complete the collection creation.

   <Image title="Components builder - Collection created" src="/images/getting-started/tutorials/xm-cloud/create-a-component-06.jpg" maxW="xl" />

## Create the component

Within this new collection, you will now create the new Component called “Text Teaser”.

1. In the "Basic Components" collection, click the "Add component" button to launch the component creation form.

1. Specify the **Name** value as **"Text Teaser"**.

   <Alert status="info">
      <AlertIcon />
      You can leave the other fields blank. The **Description** field is optional and the **Collection** field will default to the currently selected Collection so it will be stored in Basic Components as desired.
   </Alert>

   <Image title="Components builder - Create Component" src="/images/getting-started/tutorials/xm-cloud/create-a-component-07.jpg" maxW="xl" />

1. Click on the **Save** button to complete creating the component definition. A message will display telling you that the component was created.

1. Click on the **Click to start editing** link that is displayed at the top of the Component form. This will launch the canvas (or 'Section') view of the Text Teaser component where you can start adding elements in the builder.

   <Image title="Components builder - Component Created" src="/images/getting-started/tutorials/xm-cloud/create-a-component-08.jpg" maxW="xl" />

### Create the column layout for the Text Teaser component

Before we begin adding content, we want to ensure we can provide a two-column layout that matches the requirements that were given at the beginning. You will now learn how to create Card elements that can be used to hold other elements. For more details on creating layouts, you can take a look at our documentation on [Working with a component layout](https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-a-component-layout.html)

1. Click on the section/canvas. You will see a grid displayed by default.

   <Alert status="info">
      <AlertIcon />
      This can be adjusted on the pane at the right side of the screen. For now leave it as it is.
   </Alert>

   <Image title="Components builder - Section with Grid Layout" src="/images/getting-started/tutorials/xm-cloud/create-a-component-09.jpg" maxW="xl" />

1. Click and drag your mouse across the canvas to create a left column for your Text Teaser.

   <Alert status="info">
      <AlertIcon />
      By default, XM Cloud will create a **Block** element. You will want to change this to a **Card** in the following steps.
   </Alert>

   <Image title="Components builder - Create the left Card" src="/images/getting-started/tutorials/xm-cloud/create-a-component-10.jpg" maxW="xl" />

1. Click on the newly created left column Block area to load the context bar above the area.

1. Click on the element type **Block** in the context bar to change the element type.

1. Select the **Card** element type from the pop-up menu.

   <Image title="Components builder - Create Card" src="/images/getting-started/tutorials/xm-cloud/create-a-component-11.jpg" maxW="xl" />

<Alert status="warning">
   <AlertIcon />
   **Challenge:** You will now create the right side of the column. Try to do it without the steps! If you get stuck, the full steps are here to help you through it.
</Alert>

1. Click and drag your mouse across the canvas to create a right column for your Text Teaser.

   <Image title="Components builder - Create right column" src="/images/getting-started/tutorials/xm-cloud/create-a-component-12.jpg" maxW="xl" />

1. Click on the newly created right column Block area to load the context bar above the area.

1. Click on the element type **Block** in the context bar to change the element type.

1. Select the **Card** element type from the pop-up menu.

### Add content elements to the columns

Now that the layout is created, you will add text elements to the cards to match the requirements provided. Based on the requirements, we need two headings on the left side (an H2 and an H3) and a block of free-form text on the right for the teaser content.

In this section you will:

- Create the two headings (H2 and H3) on the left
- Create the block of content on the right

We will start with the headings in the left column, and then add the element to the right column.

1. Click on the left column Card to focus context on the left column. This will show you the context menu above the Card.

1. In the context menu, click on the **Add element** button to see the options for elements that can be inserted.

   <Image title="Components builder - Add Heading 2" src="/images/getting-started/tutorials/xm-cloud/create-a-component-13.jpg" maxW="xl" />

1. Select **Heading 2** to insert an H2 element to the Card.

1. Click in the top area of the Card to position where the Heading 2 element should be placed.

1. Click **Add element** button again to add another heading.

1. Select **Heading 3** to insert an H3 element to the Card.

1. Click in the area below the Heading 2 element to add the Heading 3 underneath it.

   <Image title="Components builder - Adding Heading 3" src="/images/getting-started/tutorials/xm-cloud/create-a-component-14.jpg" maxW="xl" />

1. Click on the right column Card to focus context on the right column.

1. In the context menu, click on the **Add element** button to get the element options.

1. Select **Paragraph** element to insert free-form text into the right column.

1. Click on the top part of the right Card to position the element.

   <Image title="Components builder - Adding Paragraph" src="/images/getting-started/tutorials/xm-cloud/create-a-component-15.jpg" maxW="xl" />

1. Fill out the Heading 2, Heading 3, and Paragraph elements with some example content to test the layout.

   <Alert status="info">
      <AlertIcon />
      For the content, you can make up your own text or use a generator tool like [lorem ipsum](https://www.lipsum.com/).
   </Alert>

   <Image title="Components builder - Edit Content" src="/images/getting-started/tutorials/xm-cloud/create-a-component-16.jpg" maxW="xl" />

## Make the Component available to authors

At this point we have the Text Teaser component layout defined, with some basic elements, example text, and a sample theme. Now we will make the Text Teaser available so that authors can add it to their web page in the Pages editor.

1. Above the component, click on the **Stage** button. This will move your component out of its current draft state and make it ready for use in Pages.

   <Alert status="info">
      <AlertIcon />
      When a component is staged, it is available to authors, but it will not display on the published website. When you want that component to be visible on the live website, you must publish it. Learn more in the docs about [staging and publishing](https://doc.sitecore.com/xmc/en/users/xm-cloud/staging-and-publishing-components.html).
   </Alert>

1. Return to the XM Cloud Tools pane. If you've closed that tab, you can get there with these instructions:

   - Login to the [Sitecore Cloud Portal](https://portal.sitecorecloud.io/)
   - Select your App from the Apps list
   - From the flyout panel, select **Open app**
   - At the very top switch to **Tools**

1. In the **Tools** page, select the **Pages** card to launch the Pages editor. The home page will display.

   <Image title="Pages - Editing the Home page" src="/images/getting-started/tutorials/xm-cloud/create-a-component-17.jpg" maxW="xl" />

1. On the left of the home page, click on the **Components** tab to view the list of available components.

1. Scroll down on the tab to find the **Basic Components** collection that you created earlier. In the collection you will see the Text Teaser component you have created.

   <Alert status="info">
      <AlertIcon />
      This validates that the component is available to authors. If it does not display in this list, then the component may not have been Staged or Published yet.
   </Alert>

   <Image title="Pages - Choose the Components to add to the page" src="/images/getting-started/tutorials/xm-cloud/create-a-component-18.jpg" maxW="xl" />

1. Drag the component onto the home page canvas below the title. The component will be added to the page.

   <Image title="Pages - Text Teaser on page" src="/images/getting-started/tutorials/xm-cloud/create-a-component-19.jpg" maxW="xl" />

<Alert status="success">
   <AlertIcon />
   **Congratulations!** You have successfully created a new Text Teaser component, made it available to authors, and then added it to your home page, all without writing any code.
</Alert>

### Related XM Cloud Documentation

- [Get started with XM Cloud Components](https://doc.sitecore.com/xmc/en/users/xm-cloud/get-started-with-xm-cloud-components.html)
- [Staging and publishing components](https://doc.sitecore.com/xmc/en/users/xm-cloud/staging-and-publishing-components.html)
- [Work with components](https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-components.html)
- [Work with a component layout](https://doc.sitecore.com/xmc/en/users/xm-cloud/work-with-a-component-layout.html)

### Related XM Cloud Accelerate guidance for Sitecore Partners

- [Creating New Components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components)
