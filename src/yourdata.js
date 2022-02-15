// Skills Icons
import solidityIcon from "./images/Solidity-Logo.png"
import ethereumIcon from "./images/ethereum-logo.png"
import reactIcon from "./images/react.svg"
import pythonIcon from "./images/python-logo.png"
import chainlinkIcon from "./images/chainlink-logo.png"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import twitterIcon from "./images/twitter-icon.png"

// About picture
import mePhoto from "./images/me.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Andrei",
  headerTagline: [
    //Line 1 For Header
    "Building the future",
    //Line 2 For Header
    "one Smart Contract",
    //Line 3 For Header
    "at a time",
  ],
  //   Header Paragraph
  headerParagraph:
    "Let's build a decentralised, secure, accesible and rich future together on the Web3: Tokens, NFTs, DAOs, dApps and more!",

  //Contact Email
  contactEmail: "andrei.toma8@yahoo.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "ERC20 Tokens", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "ERC721 NFTs", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "dApps", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Ever since I was young I enjoyed building. Back then it was Lego, now it's Smart Contracts on the Blockchain. Being a developer encompasses the thing I love the most: bringing my vision to reality, solving logic problems and generating value for the people around me.",
  aboutParaTwo:
    "I first found out about the Blockchain technology back in 2017 and the decentralisation aspect got my curiosity, but what really got me hooked after digging a bit deeper into it was the great potential of the industry. I truly believe Blockchain is the new internet and the next step in humanity's digital evolution. I first entered the industry as an Investor and got to analyse projects and learn about the real use cases and value of projects, differentiating from the speculative part of the crypto. Altho fun and lucrative, being an Investor didn't bring me the satisfaction of a higer purpouse, so I decided to get into coding to help build the Web3 future.",
  aboutParaThree:
    "Many courses, projects and months of learning later here I am, a young and passionate developer looking for new exciting projects to build and exciting people to meet. My mission as a Web3 developer is to help people with innovative ideas bring them to reality and make an impact in the lives of people all across the world.",
  aboutImage:
    mePhoto,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: solidityIcon,
      para:
        "When writing Smart Contracts I use the latest version of the Solidity programing language.",
    },
    {
      img: ethereumIcon,
      para:
        "I am experienced in working with the Ethereum, Polygon, BSC and most other EVM Networks.",
    },
    {
      img: pythonIcon,
      para:
        "For Smart Contract deployment, interaction and testing I use Python and  its library: Brownie with a local Ganache blockchain set-up.",
    },
    {
      img: reactIcon,
      para:
        "For Web2 integration I work with React and Next. js libraries such as Ethers, Web3-react, Moralis, Web3Modal and more.",
    },
    {
      img: chainlinkIcon,
      para:
        "I am experienced working with ChainLink's decentralised Oracles like Price Feeds and Verified Provable Randomness.",
    },
    {
      img: codeIcon,
      para:
        "Other programing languages: JavaScript, ES6, TypeScript, Python, PineScript.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Let's talk!",
  promotionPara:
    "Do you have a new idea, an exciting project you are working on or just need help? Shoot me an email or a DM on Twitter and let's see how I can help take it to take the next level. I'm happy to hear any way in which we can move this industry forward!",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next project together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/andreitoma8" },
    {
      img: twitterIcon,
      url: "https://twitter.com/toma_andrei8",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
