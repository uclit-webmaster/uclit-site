# How to update the website as a normal non-techy person

The editable data in this site is split up into "data files" that are structured simply and easy to read. When these files are edited and committed, the website will update itself automatically and after a couple minutes you should see the changes online.

Use this table to find the file you need to change.

|Section | Data File| Instructions|
| -- | -- |-- |
|President's Message | [_data/presidents-message.yml](../_data/presidents-message.yml)|[guide](#presidents-message)|
|Documents | [_data/documents.yml](../_data/documents.yml)|[guide](#Documents)|
|The Council | [_data/council.yml](../_data/council.yml)|[guide](#Council)|
|Intramurals | [_data/intramurals.yml](../_data/intramurals.yml)|[guide](#Intramurals)|
|Budgets | [_data/budgets.yml](../_data/budgets.yml)|[guide](#Budgets)|
|Clubs and Ancillaries | [_data/clubs-and-ancillaries.yml](../_data/clubs-and-ancillaries.yml)|[guide](#Clubs-and-Ancillaries)|
|Commissions | [_data/commissions.yml](../_data/commissions.yml)|[guide](#Commissions)|
|Elections | [_data/elections.yml](../_data/elections.yml)|[guide](#Elections)|
|Student academics and wellness | [_data/student-academics-wellnes](../_data/student-academics-wellness.yml)|[guide](#student-academics-and-wellness)|
|Navigation bar | [_data/navbar.yml](../_data/navbar.yml)|[guide](#Navigation-bar)|
|Footer | [_data/footer.yml](../_data/footer.yml)|[guide](#Footer)|

## How Data Files Work
The data files are written in ["YAML"](https://yaml.org/start.html) format. This makes it easy to understand by humans.

You can think of them as 2 parts: "Keywords" and "Lists".

### Example:
```yaml
# This is a comment
people:
  - name: liam
    role: president
    major: Human Geography
    image: /assets/images/headshots/liams-headshot.png
    twitter: https://twitter.com/liam
  - role: Vice President
    name: Danielle
    major: Law
    image: /assets/images/headshots/danielles-headshot.png
    twitter: https://twitter.com/danielle
```

### Keywords
Keywords are like attributes that make up an object. They are indicated by a word followed by a colon (":"). The rest of the line after the colon is the *value* of the keyword.

In the example above, `name`, `role`, and `major` are all keywords. 

### Lists
Some keywords can have dashes ("-") that follow them on the line underneath. That means the keyword designates a list of items. The items must all be indented 2 spaces to the right of the keyword. The start of each item in a list is marked by a dash, and the item only ends when the indentation is reduced, or when another dash marks the start of the next item in the list.

In the example above, Liam and Daniel, each with the keywords that make-up them, are both items in the `people` list. (Note that the first keyword in each item doesn't matter, they can be different. The only thing that indicates a new list item is the dash "-").

## How links work
Some keywords can have links (URLs) as their values. They can either point to an **external** resource outside of the uclit website (such as a facebook page, or google form), or a **local** resource that's on this website (a different webpage, or a photo).

If you're linking to an **external** resource, please include the full url, including the "https://" at the beginning. In the example above, `twitter` is an example of an external resource.

If you're linking to a **local** resource, just put "local" path. I.e. if you open this github repo's [main page](https://github.com/uclit-webmaster/uclit-site), you would put the names of the folders you click on to access the resource you want separated by slashes ("/"), followed by the file name. In the example above, `image` is an example of a local resource.

Make sure that the local path you enter leads to a resource that exists, and note that you can always add images or other files to folders by opening them in github and clicking the "Add file" in the top right.


___

## President's message
The president's message file just has 3 keywords: `image`, `name` and `message`. Make sure that whatever link you use for the image, you upload the image as well if it wasn't there before.
#### Sample:
```yaml
image: /assets/images/headshots/presidents-headshot.png
name: President's name
message: >
  Paste the president's message here with all the lines indented as shown. This value can span multiple lines because it begins with a ">".
```

## Documents
The Documents data file lets you add sections and documents to the Documents page.
- `heading`: the heading that the section will have
- `text`: the text describing the document section
- `documents`: a list of documents to add as buttons under this section
    - `text`: the text to be shown on the button
    - `link`: a local path to the document that will be downloaded when this button is pressed.

#### Sample:
```yaml
- heading: The heading for this section of documents
  text: >
    Below is the University College Literary & Athletic Society Constitution and Council Policy that govern our society. If you have any questions or concerns on these documents please contact <a href="mailto:vp@uclit.ca">vp@uclit.ca</a>.
  documents:
    - text: CONSTITUTION
      link: /assets/documents/dummy.pdf
    - text: COUNCIL POLICIES
      link: /assets/documents/dummy.pdf
- heading: The heading for the 2nd section of documents
  text: >
    Minutes contain brief summaries of our meetings. Minutes from the previous meeting are posted following approval at the subsequent meeting.
  documents: 
    - text: MINUTES
      link: /assets/documents/dummy.pdf
```

## Council
The Council file contains a nested list of items:
- The top-most level is the "groups", i.e. each of the pills on the left side of the about -> council page. Each has the `group` keyword which sets the text inside of the pill, and the `people` keyword to list the people in that group.

- each `people` item contains `name`, `image`, `role`, `from`, `major`, `email` and `office-hours`
    keywords.

#### Sample:
```yaml
- group: Core Presidents
  people:
  - name: Liam
    image: assets/images/headshots/liam.jpeg
    role: President
    from: Bradford, ON
    major: Human Geography, Political Science
    email: president@uclit.ca
    office-hours: 12-1 thursdays
  - name: Danielle
    image: assets/images/headshots/danieele.jpeg
    role: President
    from: Bradford, ON
    major: Human Geography, Political Science
    email: president@uclit.ca
    office-hours: 12-1 thursdays
- group: Executives
  people:
  - name: Someone Else
    image: assets/images/headshots/danielle.jpg
    role: President
    from: Bradford, ON
    major: Human Geography, Political Science
    email: president@uclit.ca
    office-hours: 12-1 thursdays
```

## Intramurals
The Intramurals file contains following keywords:
- `sign-up-link`: the link to the general intramurals sign-up form
- `deadline-text`: The text that will be shown on the page to specify the deadline to apply
- `sports`: a list of sports, each containing the following keywords. For each sport, another square will be shown on the page with the image, and sport name/sign-up text on hover.
    - `name`: the name of the sport to be shown on the page on hover
    - `sign-up-link`: the google form (or other) sign-up link for the specific sport
    - `image`: the link to the image to show on the page for this sport
#### Sample: 
```yaml
sports:
  - name: Basketball
    sign-up-link: "#"
    image: /assets/images/intramurals-photos/uclit-basketball.png
  - name: Volleball
    sign-up-link: "#"
    image: /assets/images/intramurals-photos/uclit-volleyball.png
  - name: Soccer
    sign-up-link: "#"
    image: /assets/images/intramurals-photos/uclit-soccer.png
  - name: Badminton
    sign-up-link: "#"
    image: /assets/images/intramurals-photos/uclit-badminton.png
  - name: Hockey
    sign-up-link: "#"
    image: /assets/images/intramurals-photos/uclit-hockey.png
  - name: Dodgeball
    sign-up-link: "#"
    image: /assets/images/intramurals-photos/uclit-dodgeball.png
sign-up-link: "#" # TODO: add sign-up link
deadline-text: The deadline to apply is SOME DATE. After that, please email <a href="mailto:athletics@uclit.ca">athletics@uclit.ca</a> to see if space is available.
```

## Budgets
The Budgets file contains the following keywords:
- `text`: The text to be shown at the top of the page.
- `documents`: a list of documents, each containing the following keywords. Each document will cause another download button to be shown on the page
    - `text`: text to be placed in the download button for the doc
    - `link`: the link to the document itself that'll be downloaded on the press of the button
#### Sample:
```yaml
text: >
  To ensure openness to our students our budgets are made public. All budgets are subject
  to an annual, third-party audit. Any questions or concerns on the budget or budgeting process
  can be made to finance@uclit.ca. Click on the button below to access them!
documents:
  - text: BUDGETS
    link: /assets/documents/dummy.pdf
```

## Clubs and Ancillaries
The Clubs and Ancillaries file contains 2 lists: `clubs` and `ancillaries`. For each item in the lists, another circle icon and corresponding card will be shown on the page.
- `clubs`: a list of clubs, each of which contain the following keywords. Each club corresponds to a circle icon and card in the page.
    - `name`: name to be shown at the top of the club card
    - `icon`: link to the club's logo
    - `socials`: list of social network links for the club, containing the following keywords:
        - `network`: one of facebook/twitter/youtube/instagram/email/web
        - `link`: the actual link to the social network profile of the club. If the network is email, don't forget to prepend it with "mailto:"
    - `description`: the text to be put in the body of the card. Use "\<p> and \</p> to separate paragraphs as shown in the sample.

- `ancillaries`: a list of ancillaries, each corresponds to a circle icon and card in the bottom half of the page.
    - the keywords of each ancillary are the same as those of the clubs above

#### Sample:
```yaml
clubs:
  - name: UC Dragon Boat Club (UCDBC)
    icon: /assets/images/clubs-ancillaries-icons/uc-dragon-boat.svg
    socials:
      - network: twitter
        link: http://twitter.com/university-college-lit
      - network: youtube
        link: http://youtube.com/university-college-lit
      - network: web
        link: http://ucdbc.com
      - network: facebook
        link: http://facebook.com/university-college-lit
      - network: instagram
        link: http://instagram.com/university-college-lit
      - network: e-mail # dont forget the mailto: for emails!!
        link: mailto:ucdbc@uclit.ca
    description: >
        <p>
          Training with the UCDBC is not merely about
          winning; paddlers not only gain mental and
          physical strength, but are also
          immersed in a bonding environment where they 
          belong. While the team grows even more, one
          thing will remain undoubtedly true: the UCDBC is
          a one-of-a-kind family.
        </p>
        <p>
          Diabolos’ is a student-run, fair trade
          environmentally-conscious coffee bar at UC
          serving hot and cold drinks and a variety of
          pastries, wraps and meals.
        </p>
      

ancillaries:
  - name: Diabolos
    icon: /assets/images/clubs-ancillaries-icons/diabolos.svg
    socials:
      - network: e-mail # dont forget the mailto: for emails!!
        link: mailto:ucdbc@uclit.ca
      - network: instagram
        link: http://facebook.com/university-college-lit
    description: >
      <p>
        Diabolos’ is a student-run, fair trade,
        environmentally-conscious coffee bar at UC
        serving hot and cold drinks and a variety of
        pastries, wraps and meals.
      </p>
```

## Commissions
The Commissions file is a list items, each of which contain the following keywords. For each item, another card will be shown on the page with the given information.
- `name`: the name of the commission
- `image`: the link to the image of the commission
- `email`: the email of the commission
- `names`: the names of the commissioners, written the way you'd like to have it displayed on the site
- `description`: the description that'll be shown in the card for the commission
#### Sample:
```yaml
- name: ATHLETICS
  image: assets/images/commissions-icons/athletics.svg
  email: athletics@uclit.ca
  commissioners: HANNAH ROBERTS WITH FIRST LAST, FIRST LAST
  description: The Athletics Commission runs all sports themed events, such as ski trips, Raptors games, viewing parties and much more! They also oversee all the UC intramurals - more information about joining a team can be found on the Intramurals page!

- name: LITERARY & CREATIVE ARTS (LCA)
  image: assets/images/commissions-icons/lca.svg
  email: lca@uclit.ca
  commissioners: HANNAH FLEISCH WITH AIYANA HARVEY, CALEB SANDBLOM
  description: LCA specializes in providing a platform for UC students to showcase their talent and creativity, and encourage art around our college. They also oversee UC publications such as our newspaper, the UC Gargoyle, and our literary journal, The UC Review.
```

## Elections
This data file lets you set the text to be displayed in the "Get Involved" -> "Elections" page.
- `text`: the text to be shown on the page
#### Sample:
```yaml
text: >
  In quo enim maxime consuevit iactare vestra se esse ratione voluptatem sequi nesciunt. Quid ex ea commodi
  consequatur? quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi.
  ```

## Student Academics and Wellness
This data file contains a list of the headers and text of different sections of the page. Each list item contains the following keywords:
- `header`: the header of the section to add to the page
- `text`: the text to add in that section

#### Sample:
```yaml
- header: COVID-19
  text: >
    In quo enim maxime consuevit iactare vestra se esse ratione voluptatem sequi nesciunt. Quid ex ea commodi
    consequatur? quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi.
- header: BLM & RACIAL JUSTICE SUPPORT
  text: >
    In quo enim maxime consuevit iactare vestra se esse ratione voluptatem sequi nesciunt. Quid ex ea commodi
    consequatur? quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
```

## Navigation Bar
This data file lets you set the buttons in the navigation bar at the top of the page.
It contains a 2-level list because some of the buttons in the navigation bar are dropdowns, specified with the `options` keyword.
- `name`: the top-level "name" keyword adds another entry to the navigation bar at the top. Each "name" can have either a `link` keyword if its just a link, or an `options` keyword if you'd like it to be a dropdown.
- `link`: the url that this navigation bar button leads to.
    - (note that if this link leads to another page in the website, it can be a "relative url" without the leading "https://", see the example below)
- `options`: replaces `link` if this option is a dropdown, this keyword lets you add a list of (`name`, `link`)s as the dropdown options.
    - `name`: the text to be shown for this entry in the dropdown
    - `link`: the url that this entry leads to

#### Sample:
```yaml
- name: Home # This isn't a dropdown
  link: /
- name: About # This is a dropdown since it has an "options" keyword
  options:
    - name: The Council
      link: /about/council # These are all relative links
    - name: About us
      link: /about/about-us # These are all relative links
    - name: A Brief History
      link: /about/history # These are all relative links
- name: Store
  link: https://university-college-literary-athletic-society.square.site/ # This is an external link that doesn't lead to a page in the site
```

## Footer
The footer of the site consists of a row of 4 sections: a general logo section, "Quick Links", "Follow Us" and "Find Us". The general section can't be changed, but the following keywords control the other ones.
- `quick_links`: a list of plain text links
    - `name`: the text that will be clickable
    - `link`: the url that the text will lead to. Like the nav bar above, the links can be relative or external (see sample above)
- `follow_us`: contains a list of contact links
    - `network`: one of `facebook`, `twitter`, `instagram`, `youtube`, `e-mail`, `square`, `snapchat` or `website`. Controls which icon to show for this link
    - `link`: the url where this icon leads to
- `find_us`: put address here, as shown in the sample. Note that since it starts with a "|" character, the website will respect the line breaks. So it'll be shown on the site the same way it shows in the data file. [Click here](https://yaml-multiline.info/) to see an explanation.
#### Sample:
```yaml
quick_links:
  - name: UC Clubs
    link: /get-involved/clubs
  - name: JCR Rentals
    link: /jcr-rentals

follow_us:
  - network: facebook
    link: https://www.facebook.com/universitycollegelit/
  - network: twitter
    link: https://twitter.com/uclit_uoft/
  - network: instagram
    link: https://www.instagram.com/uclit_uoft/
  - network: snapchat
    link: https://snapchat.com/add/uclit_uoft/
  - network: square
    link:  https://university-college-literary-athletic-society.square.site/

find_us: |
  15 King’s College Circle
  Junior Common Room (JCR)
  Toronto, ON M5S 3H7
```
