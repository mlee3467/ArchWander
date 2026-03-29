/* ============================================================
   ArchWander — Audio Guide Scripts · English · New York City
   ============================================================
   Structure:
     AUDIO_EN_NYC['location-id'] = {
       title:    display title for the player header,
       duration: approximate listening time in seconds (auto-estimated),
       script:   full audio guide text (350–500 words, TTS-optimized)
     }

   Loading: this file is loaded lazily — only when the user
   opens the Audio Guide tab while viewing a New York location.
   It is NOT included in the initial page bundle.

   To add a new location:
     1. Add an entry below with the exact location id from data-new-york.js
     2. git add data-audio-en-new-york.js && git commit && git push
   ============================================================ */

// window.AUDIO_EN_NYC — must be on window so dynamic <script> injection
// can detect it via window[varName]. Using const/let would be block-scoped
// inside the script and NOT accessible on window after load.
window.AUDIO_EN_NYC = {

  'empire-state': {
    title: 'Empire State Building',
    script: `Welcome to one of the most recognized buildings on Earth — the Empire State Building.

Standing at 1,454 feet to the tip of its antenna, this 102-story Art Deco tower has defined the New York City skyline since 1931. But what makes it truly remarkable is not just its height — it is the story of how it was built.

Construction began in March 1930 and was completed in just 410 days. At the peak of construction, more than 3,400 workers were on site each day, erecting an astonishing 4.5 floors per week. The workers — many of them Mohawk ironworkers from Kahnawake, Quebec, renowned for their fearlessness at heights — riveted together 60,000 tons of steel in under fourteen months. The project came in under budget and ahead of schedule, a near miracle during the depths of the Great Depression.

The architects, Shreve, Lamb and Harmon, designed the building in the Art Deco style — a language that celebrated optimism, speed, and modernity through geometric ornament and vertical thrust. Look up at the limestone and granite facade and notice how the building steps back in dramatic setbacks as it rises, a form shaped partly by New York's 1916 zoning law to allow light to reach the streets below.

At the crown, the iconic silver Art Deco spire was originally designed as a mooring mast for dirigibles — transatlantic airships. It was a visionary but impractical idea; strong winds made docking impossible, and it was used only a handful of times. Today, the spire broadcasts television and radio signals across the tri-state area.

The building's color-changing LED lighting, installed in 1976 and upgraded over the decades, has become a beloved New York tradition. The tower illuminates in colors to mark holidays, causes, and sports championships — from red, white, and blue for Independence Day to green for St. Patrick's Day.

As you stand here, take a moment to consider what this building meant to the thousands who labored to raise it, floor by floor, during one of history's most desperate economic crises. In a city that never stops building, the Empire State Building remains the ultimate symbol of New York's ambition.

The observation deck on the 86th floor offers a 360-degree panorama stretching up to 80 miles on a clear day. Look for the Art Deco elevator lobbies on your way up — their golden murals are among the finest interiors of the era.`
  },

  'chrysler': {
    title: 'Chrysler Building',
    script: `You are standing before what many architects and historians consider the greatest Art Deco skyscraper ever built — the Chrysler Building.

Completed in 1930 for automobile magnate Walter Chrysler, this 1,046-foot tower was briefly the tallest building in the world — a title it held for just eleven months before the Empire State Building surpassed it. But in that brief reign, architect William Van Alen created something far more enduring than a record: an icon.

The story of its crown is one of architecture's great dramas. Van Alen was locked in a fierce competition with 40 Wall Street, which was racing to claim the title of world's tallest. To outmaneuver his rival, Van Alen secretly assembled a 185-foot stainless steel spire — nicknamed the "Vertex" — inside the building's fire shaft. When 40 Wall Street topped out at 927 feet and declared victory, Van Alen raised his spire through the dome in just 90 minutes, instantly surging past his competitor. The architectural world was stunned.

Look up at that crown now. The gleaming stainless steel eagle gargoyles jutting from the 61st floor were modeled on the hood ornaments of the 1929 Chrysler Plymouth automobile. The sunburst arches of the dome, with their triangular windows, catch the light differently at every hour of the day. At night, lit from within, the crown glows like something from a science fiction dream.

The lobby, which is open to the public, is one of New York's hidden treasures. Step inside and you will find walls clad in red Moroccan marble, elevator doors inlaid with rare wood veneers in abstract floral patterns, and a ceiling mural depicting the progress of transportation and human achievement — painted in 1930 by Edward Trumbull across 97 feet of ceiling space.

Van Alen drew his design language from the world of speed and machines — radiator caps, hubcaps, and hood ornaments translated into architectural form at urban scale. The result is a building that still feels radical today, nearly a century after its completion.

Walter Chrysler himself financed the building with his own money, outside of the Chrysler Corporation, and had his private apartment at the top. He never got to be the tallest for long, but in terms of pure architectural imagination, most would argue he won.

As you walk away, look back at the distinctive eagle heads and the way the stainless steel shimmers. This is Art Deco at its most exuberant — a building that feels like it is celebrating something, even now.`
  },

  'guggenheim': {
    title: 'Solomon R. Guggenheim Museum',
    script: `Welcome to the Solomon R. Guggenheim Museum — one of the most significant and debated buildings of the twentieth century.

Designed by Frank Lloyd Wright and completed in 1959, the Guggenheim stands in dramatic contrast to the rectangular grid of Manhattan. Its form — a continuous spiral of white reinforced concrete rising from a narrow base to a wide crown — was unlike anything the world had seen in a museum. Wright called it an "organic" form, inspired by nautilus shells and the natural spirals found throughout nature.

Wright received the commission in 1943 from art dealer Hilla von Rebay, who wanted a "temple of spirit" for the collection of mining magnate Solomon Guggenheim. What followed was sixteen years of design revisions, building permit battles, and profound disagreements about how art should be experienced. Wright died six months before the museum opened — he never saw his masterpiece completed.

The concept is radical even today. Rather than moving through separate rooms, visitors take an elevator to the top and walk down a continuous ramp that spirals outward as it descends. The artworks hang on the curving walls, bathed in natural light from the central oculus above. Wright envisioned the visitor almost floating through art, experiencing it as a continuous, unbroken journey rather than a series of discrete encounters.

Many artists and critics have debated whether this is the ideal way to experience painting — the tilting walls, the constant turning, the views across the open rotunda to other visitors and other art. Some have argued it overwhelms the work. Others say it creates an unforgettable spatial dialogue between art and architecture.

When the building opened, the New York Times called it "a war between architecture and painting in which both come out badly wounded." Today, it is a UNESCO World Heritage Site.

Look up into the rotunda from the ground floor. The oculus — the round skylight at the top — appears small from here but measures 92 feet across. Natural light filters down through the entire spiral, giving the space a quality that changes with the weather and the season.

Notice the exterior closely. The concrete was painted white and the surface appears smooth, but the form required extraordinary engineering skill. Wright's collaborator, engineer Mendel Glickman, worked for years solving the challenges of casting such complex curves in concrete.

Wright designed over 1,000 buildings in his 70-year career, but this was the one he considered his greatest gift to New York — a city he publicly disliked for most of his life. Whatever you make of the architecture, few buildings in the world invite you to experience space quite like this.`
  },

  'seagram': {
    title: 'Seagram Building',
    script: `You are standing before the building that changed the way cities look around the world — the Seagram Building.

Completed in 1958 on Park Avenue and designed by Ludwig Mies van der Rohe with Philip Johnson, this 38-story bronze-and-glass tower is widely regarded as the finest example of the International Style skyscraper ever built. It did not just raise the bar — it set the standard that generations of office towers would attempt to follow.

What makes it extraordinary is not what it does, but what it refuses to do. In an era when most corporate buildings were festooned with ornamentation and pushed to the very edge of their lots, Mies pulled the tower back 100 feet from Park Avenue, creating a granite plaza with two reflecting pools. This was a revolutionary act of generosity in a city where every square foot of ground has monetary value. Seagram's owner, Samuel Bronfman, reportedly gave up an estimated one million square feet of rentable space to create this public gift.

The tower rises from the plaza on slender bronze stilts — the pilotis — and the glass curtain wall reveals the structural grid within. But look more carefully. The structural columns are actually set inside the glass skin, not on the exterior. The bronze I-beams you see welded to the facade are purely expressive — they reveal the structure's logic without being the structure itself. This is Mies at his most sophisticated: telling a true story about a building's nature while also composing a perfectly proportioned facade.

The bronze has aged to a deep amber that glows in the late afternoon sun. Mies chose bronze — then an unusual and expensive material for a commercial building — to ensure the color would deepen and stabilize over time rather than deteriorate. He was thinking decades ahead.

Inside the building, every detail was designed by Mies and Johnson, from the travertine lobby floors to the hardware on the doors. The Four Seasons restaurant, which occupied the ground floor for decades, was itself a landmark of modernist interior design.

The Seagram Building had an enormous influence on the shape of cities globally. The open plaza concept was so admired that New York City changed its zoning laws in 1961 to incentivize developers to create similar public spaces in exchange for additional building height. Today, hundreds of plazas across Manhattan trace their existence back to this single building.

Stand in the plaza for a moment. Feel the stillness of it against the noise of Park Avenue. That calm — deliberate, refined, effortlessly confident — is exactly what Mies intended.`
  },

  'flatiron': {
    title: 'Flatiron Building',
    script: `Few buildings in the world have captured the public imagination quite like the Flatiron Building — and it is easy to understand why.

Completed in 1902 and designed by Chicago architect Daniel Burnham, this 22-story iron-framed tower occupies one of the most unusual plots in Manhattan: a narrow, flat-iron-shaped triangle formed where Broadway crosses Fifth Avenue at 23rd Street. The building tapers to a point just six and a half feet wide at its northern tip — barely wider than a large dining table.

When it was built, New Yorkers were unsure what to make of it. Many predicted the wind rushing around its triangular form would be dangerous enough to topple the building entirely. The nickname "Burnham's Folly" circulated widely in the press. Crowds gathered, some expecting disaster. Instead, the building stood firm, and the wind effects it created became infamous for a different reason: strong gusts up Fifth Avenue were known to lift women's skirts, causing police to chase away men who gathered at 23rd Street to watch. The phrase "23 Skidoo" — meaning get out of here — is said to have originated from officers shooing away these observers.

Burnham designed the facade in the Beaux-Arts style, clad in glazed terra-cotta that mimics the limestone of Renaissance Italian palaces. Look at the ornamental detail on the skin — the intricate foliate patterns, the classical columns and cornices that were applied to the steel-frame skeleton. This was a moment in American architecture when engineers had mastered steel-frame construction but architects were still dressing buildings in historical clothing. The Flatiron sits at that fascinating crossroads.

The building's slim profile and dramatic triangular geometry made it an immediate subject for photographers and painters. Alfred Stieglitz photographed it in 1902 and 1903, in fog and snowfall, producing images that remain among the most celebrated architectural photographs in history. Edward Steichen photographed it at night, glowing against an indigo sky. The building became, almost immediately, a symbol of New York's modernity — proof that the city was reshaping itself in ways the world had never seen.

Today, the surrounding Flatiron District takes its name from this single building. Stand at the northern tip and look straight at the point — the razor-thin edge slicing through the intersection. Then step back to the full view from across Madison Square Park, where Stieglitz once stood. From here, the building seems to emerge from the street like the prow of a great ship sailing up Broadway.`
  },

  'high-line': {
    title: 'The High Line',
    script: `You are on one of the most celebrated urban transformations of the twenty-first century — the High Line.

What you are walking on was once a functioning freight railway, built in 1934 to carry meat, produce, and goods from the Hudson River piers to the factories and warehouses of Manhattan's West Side. The elevated line ran through the middle of buildings — literally through the lower floors of some structures — to deliver goods directly without interfering with street traffic below.

By the 1980s, with trucking replacing rail freight, the line fell out of use. The last train ran in 1980, carrying frozen turkeys. For nearly two decades, the elevated steel structure sat abandoned, slowly being colonized by wild plants — grasses, sumac, and aster that seeded themselves in the gravel ballast without any human help. Some sections of original track remain visible beneath your feet, still embedded in the ground where the trains once ran.

In 1999, neighborhood residents Joshua David and Robert Hammond founded the Friends of the High Line to fight the city's plan to demolish the structure. Their campaign succeeded, and in 2004 the city committed to preserving and transforming it. The landscape architecture firm James Corner Field Operations, working with architects Diller Scofidio and Renfro, won the design competition and created the park you are experiencing today.

The design philosophy honored what had made the abandoned line beautiful in the first place — the wildness, the elevated perspective, the unexpected views. Rather than replacing the industrial character with a conventional park, the designers integrated original rail tracks, exposed steel, and plantings that echo the volunteer ecology that had taken hold during the abandoned years. Plant designer Piet Oudolf created a meadow-like planting palette that changes with the seasons and was selected partly to provide food for migrating birds.

The park opened in phases: the first section in 2009, the second in 2011, and the final Railyards section in 2014. What began as an exercise in preservation became a catalyst for one of the most dramatic real estate transformations in New York history — the Hudson Yards neighborhood rose entirely around the High Line's lower end, and the surrounding blocks attracted billions in private development.

As you walk, look for moments where the park dips to street level — where the urban grid below suddenly becomes visible through steel grating beneath your feet. Look at the Hudson River to your west, and the dense wall of buildings to the east. The High Line gives you Manhattan from a perspective that no street can offer: slightly above, slightly apart, moving through the city without quite being in it.`
  },

  'one-wtc': {
    title: 'One World Trade Center',
    script: `You are standing at the base of One World Trade Center — the tallest building in the Western Hemisphere, and a structure that carries more history than almost any building constructed in our lifetimes.

The original Twin Towers, designed by Minoru Yamasaki and completed in 1972 and 1973, stood here for nearly three decades before the attacks of September 11, 2001. The design of their replacement was among the most contested and emotionally charged architectural competitions in history. Ultimately, the commission went to David Childs of Skidmore, Owings and Merrill, working within a master plan developed by Daniel Libeskind.

The building rises 1,776 feet — a number chosen deliberately to echo the year of American independence. It is the first number you should hold in mind here: 1,776. The second is 1,368 — the height of the original North Tower, which One World Trade Center was designed to honor in form and spirit.

The design is geometric and powerful. The square base of the tower — aligned exactly with the street grid of Lower Manhattan — twists as it rises, the corners transforming into eight isosceles triangles that resolve at the top into a perfect octagon. This tapering form gives the building its distinctive silhouette and also creates a variety of visual readings from different angles across the city. From some perspectives it appears faceted and sharp; from others, almost cylindrical.

The base is clad in 186 panels of blast-resistant glass prisms that reflect the sky and surrounding cityscape, intended to be both beautiful and to announce that this building was built with an awareness of its vulnerability. Below the glass base, the building is set on a concrete podium — a 185-foot security zone that houses mechanical systems and creates a buffer between the structure and the street.

Adjacent to the tower, the 9/11 Memorial pools occupy the exact footprints of the original Twin Towers — two square voids from which water falls continuously into reflecting basins below, descending again to a central void you cannot see. The names of the 2,977 people killed in the attacks of September 11, 2001 and February 26, 1993 are inscribed in bronze around the pools. Take time to find a name, to read it aloud in your mind.

The Observatory on floors 100 through 102 offers views across five states. But perhaps the most powerful experience of this place is simply to stand here, at the base, and look up — to feel both the ambition of what was rebuilt and the weight of why it was necessary.`
  },

  'rockefeller': {
    title: '30 Rockefeller Plaza',
    script: `Welcome to Rockefeller Center — arguably the greatest feat of urban planning and architecture in twentieth-century America.

The complex you are looking at was conceived during the Great Depression, when philanthropist John D. Rockefeller Jr. found himself holding a lease on 12 acres of midtown Manhattan after the Metropolitan Opera abandoned plans to build on the site. Rather than wait out the economic crisis, Rockefeller commissioned architect Raymond Hood and a team of designers to build a city within the city — a complex of commercial skyscrapers, public spaces, theaters, and underground passages that would generate enough revenue to justify the staggering investment.

Construction began in 1930 and continued for an entire decade, with fourteen buildings ultimately comprising the core complex. At the peak of construction, 225 buildings were demolished, 4,000 families relocated, and 75,000 workers employed at the site over the course of the decade.

The building before you, 30 Rockefeller Plaza — known familiarly as 30 Rock — is the centerpiece. Rising 850 feet in a series of setbacks that echo the Art Deco aesthetic of the era, it is faced in Indiana limestone and decorated with sculptural works by over 30 artists from across America and Europe. The selection of art was itself a controversy: Diego Rivera's original lobby mural, which included a portrait of Lenin, was destroyed by Rockefeller after Rivera refused to remove it — one of history's great conflicts between patron and artist.

Look at the facade above the main entrance, where Lee Lawrie's sculptural relief depicts Wisdom, Light, and Sound — the forces of communication and knowledge, appropriate for a complex that housed NBC's radio and later television studios. The Rainbow Room, on the 65th floor, has hosted every significant cultural and political gathering of New York life for nine decades.

Below your feet, a remarkable subterranean network of shopping corridors, subway connections, and service passages extends beneath the entire complex — a city beneath a city, as Hood intended. In winter, the Channel Gardens — the promenade leading from Fifth Avenue to the sunken plaza below — are decorated with seasonal installations. The ice-skating rink in that plaza has been in operation since 1936.

The Top of the Rock observation deck, on the 67th through 70th floors, offers one of the finest views of midtown Manhattan — and crucially, it is one of the few elevated vantage points from which you can see the Empire State Building clearly, since you cannot see it from its own observatory.`
  },

  'whitney': {
    title: 'Whitney Museum of American Art',
    script: `You are standing before the Whitney Museum of American Art — one of the most thoughtfully designed museum buildings of the twenty-first century, and one of the finest works by Italian architect Renzo Piano.

The Whitney, which holds the largest collection of twentieth and twenty-first century American art in the world, moved to this location in the Meatpacking District in 2015 after nearly three decades in its previous Marcel Breuer building on the Upper East Side. The decision to relocate here — at the southern end of the High Line, just above the Hudson River — was both a statement about the neighborhood's transformation and a vote of confidence in what architecture could mean for a cultural institution.

Piano designed the building as a series of asymmetric volumes stacked and shifted against each other, clad in a combination of gray-painted steel panels, glass, and weathering steel. The result is deliberately industrial — echoing the former warehouse and meatpacking character of the district — while also being unmistakably refined and precise. Piano has called it an "anti-iconic" building: one that does not seek to be a sculptural object but rather to serve, to work, and to frame the city around it.

Walk around the building and you will notice it behaves differently from every angle. The east facade, facing the High Line, is transparent and open — glass walls reveal the interior galleries and the museum's internal circulation. The west facade, toward the Hudson River, is more solid, industrial, and introverted. The building responds to its site rather than imposing upon it.

The outdoor terraces on multiple floors are among the best places in New York to experience the city. From the fifth floor terrace, you can see the High Line running north, the Hudson River to the west, lower Manhattan to the south, and the dense grid of Chelsea to the east. These terraces were designed to be programming spaces — stages for performance, gathering, and outdoor installation — not just circulation.

Inside, the galleries were designed with extraordinary flexibility: 50,000 square feet of exhibition space with floor-to-ceiling heights of up to 18 feet, column-free spans, and utility connections embedded throughout the floors so that almost any configuration of work can be accommodated. Natural light enters through clerestory windows and the glass facades, but can be controlled and blackened when exhibitions require it.

When you enter, look at the industrial elevator and the raw concrete of the lobby. Piano has always believed that museums should feel welcoming and unheroic. This one does. It feels like a place where art lives, not a monument to itself.`
  },

  'brooklyn-bridge': {
    title: 'Brooklyn Bridge',
    script: `You are standing before one of the greatest engineering achievements of the nineteenth century — the Brooklyn Bridge.

When it opened on May 24, 1883, the Brooklyn Bridge was the longest suspension bridge in the world, spanning 1,595 feet across the East River between Manhattan and Brooklyn. It held that record for twenty years. More significantly, it was the first steel-wire suspension bridge ever built — a technical breakthrough that defined how suspension bridges would be constructed for the century that followed.

The story of its creation is one of extraordinary human drama. German-born engineer John Augustus Roebling conceived the design and won the commission, but was fatally injured in a construction accident at the bridge site in 1869, before construction even began. His son, Washington Roebling, took over — and was himself incapacitated by caisson disease, which we now know as decompression sickness, contracted from working in the pressurized underwater caissons used to set the towers' foundations. Washington directed the remaining construction from his apartment in Brooklyn Heights, watching through a telescope while relaying instructions through his wife, Emily Warren Roebling, who became the primary intermediary between the bedridden engineer and the construction team. Emily Roebling was the first person to cross the completed bridge in an official ceremony, carrying a rooster as a symbol of victory.

The two Gothic Revival towers — standing 276 feet above the water — were the tallest structures in the United States when they were built. Their stone-arched openings are among the most recognizable architectural elements in the American landscape. Roebling designed them in masonry not merely for strength but to give the bridge a permanence and gravitas that the new industrial age demanded.

The construction required 600 workers at any one time over thirteen years, at enormous human cost. At least 27 men died during construction, including Roebling himself. Workers who descended into the pressurized caissons to excavate the foundations reported terrifying, disorienting conditions — burning gas, lack of oxygen, eerie silence — conditions we now understand caused the neurological damage that destroyed Washington Roebling's health.

Walk out onto the wooden pedestrian promenade above the traffic lanes. From the center of the bridge, Manhattan and Brooklyn both appear as equal horizons — the two boroughs that the bridge first connected when they were still separate cities. Look down through the steel cables at the East River moving beneath you, and consider that you are standing on a structure built before electricity, before the telephone, before the automobile — built by hand, by immigrants, by sheer human determination, and still carrying hundreds of thousands of people across the water every single day.`
  }

};
