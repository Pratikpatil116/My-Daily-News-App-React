import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
   static defaultProps = {
      country: 'in',
      pageSize: 5,
      category: 'general',
   }
   static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
   }

   articles = [
      {
         "source": {
            "id": null,
            "name": "Business Standard"
         },
         "author": "SI Reporter",
         "title": "MARKET LIVE: Sensex, Nifty wipe off loses, trade flat; Realty index up 4% - Business Standard",
         "description": "Stock market LIVE: Two new IPOs will open for subscription today, namely Ami Organic & Vijaya Diagnostic",
         "url": "https://www.business-standard.com/article/markets/market-live-sensex-nifty-gdp-peak-margin-auto-sales-ipo-vedanta-121090100132_1.html",
         "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-04/08/full/1617825798-1622.jpg",
         "publishedAt": "2021-09-01T08:25:06Z",
         "content": "SI Reporter | New Delhi\r\n \r\nLast Updated at September 1, 2021 14:20 IST"
      },
      {
         "source": {
            "id": null,
            "name": "NDTV News"
         },
         "author": "Posted by Nonika Marwaha",
         "title": "Afghanistan Crisis LIVE: India Announces First Formal Meet With Taliban, Biden Defends US Exit - NDTV",
         "description": "India on Tuesday, for the first time, admitted to having held diplomatic talks with the Taliban which has taken control of Afghanistan in the past few days following the withdrawal of US forces from there.",
         "url": "https://www.ndtv.com/world-news/afghanistan-crisis-live-updates-india-announces-first-formal-meet-with-taliban-biden-defends-us-exit-2525581",
         "urlToImage": "https://c.ndtvimg.com/2021-08/orm2mjh_taliban-afp_650x400_31_August_21.jpg",
         "publishedAt": "2021-09-01T08:10:12Z",
         "content": "US exit from Afghanistan was the \"best decision for America\", Joe Biden said\r\nIndia on Tuesday, for the first time, admitted to having held diplomatic talks with the Taliban which has taken control o… [+5436 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "The Indian Express"
         },
         "author": "Shamik Chakrabarty",
         "title": "All for one, one for all: England bowlers keep Virat Kohli quiet - The Indian Express",
         "description": "A casual glance might make it seem Kohli's troubles have been because he has been poking outside off stump but it has to be said that England's bowlers have had their own unique pressure channels in that region.",
         "url": "https://indianexpress.com/article/sports/cricket/all-for-one-one-for-all-england-bowlers-keep-virat-kohli-quiet-7481402/",
         "urlToImage": "https://images.indianexpress.com/2021/08/india-england-test-1.jpg",
         "publishedAt": "2021-09-01T07:56:03Z",
         "content": "Until now we have found ways of getting him (Virat Kohli) out, we have found ways of building pressure on him and keeping him quiet because he is obviously a fine player, a tremendous thing in Test c… [+3127 chars]"
      },
      {
         "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
         },
         "author": "TIMESOFINDIA.COM",
         "title": "Just in! Late Dilip Kumar's wife Saira Banu hospitalised, shifted to ICU - Times of India",
         "description": "Late Dilip Kumar’s wife Saira Banu has been hospitalised following a health issue. The veteran actress has reported",
         "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/just-in-late-dilip-kumars-wife-saira-banu-hospitalised-shifted-to-icu/articleshow/85827864.cms",
         "urlToImage": "https://static.toiimg.com/thumb/msid-85827864,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-75486/85827864.jpg",
         "publishedAt": "2021-09-01T07:50:00Z",
         "content": null
      },
      {
         "source": {
            "id": null,
            "name": "NDTV News"
         },
         "author": null,
         "title": "\"Mother Of 2 Infants\": Trinamool MP's Wife's Request Over Summons In Case - NDTV",
         "description": "Rujira Banerjee, wife of Trinamool MP Abhishek Banerjee, has written to the Enforcement Directorate asking that she be exempted from travelling to New Delhi in the middle of a pandemic in connection with the summons issued against her in a coal case.",
         "url": "https://www.ndtv.com/india-news/can-consider-kolkata-trinamool-mps-wife-to-probe-agencys-delhi-summon-2525896",
         "urlToImage": "https://c.ndtvimg.com/2021-09/ojf0ekug_rujira-banerjee-1-650_625x300_01_September_21.jpg",
         "publishedAt": "2021-09-01T07:42:08Z",
         "content": "Rujira Banerjee is wife of Trinamool general secretary Abhishek Banerjee (File)\r\nNew Delhi: Rujira Banerjee, wife of Trinamool MP Abhishek Banerjee, has written to the Enforcement Directorate asking … [+1666 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "NDTV News"
         },
         "author": null,
         "title": "Congress Leader's Penance As \"Panj Pyare\" Remark Causes New Punjab Row - NDTV",
         "description": "Congress leader Harish Rawat today apologised for his controversial comments comparing Navjot Sidhu and team to \"Punj Pyare\", a term of reverence for Sikhs.",
         "url": "https://www.ndtv.com/india-news/harish-rawat-apologises-as-panj-pyare-remark-causes-new-punjab-row-2525838",
         "urlToImage": "https://c.ndtvimg.com/2021-09/3lesc218_harish-rawat_625x300_01_September_21.jpg",
         "publishedAt": "2021-09-01T07:24:00Z",
         "content": "Harish Rawat promised to atone for the blunder by offering his service at a gurdwara.\r\nNew Delhi: Congress leader Harish Rawat today apologised for his controversial comments comparing Navjot Sidhu a… [+1981 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "NDTV News"
         },
         "author": "Jagmeet Singh",
         "title": "Samsung Galaxy A52s 5G With Quad Rear Cameras, Snapdragon 778G SoC Launched in India: Price, Specificatio... - Gadgets 360",
         "description": "Samsung Galaxy A52s 5G was launched in India on Wednesday. The new Samsung phone comes with a 120Hz AMOLED display and carries a quad rear camera setup.",
         "url": "https://gadgets.ndtv.com/mobiles/news/samsung-a52s-5g-price-in-india-rs-35999-launch-sale-date-september-1-specifications-galaxy-2525823",
         "urlToImage": "https://i.gadgets360cdn.com/large/samsung_galaxy_a52s_5g_image_1_1630478196156.jpg",
         "publishedAt": "2021-09-01T06:50:10Z",
         "content": "Samsung Galaxy A52s 5G was launched in India on Wednesday, September 1 as the latest model in the Galaxy A series. The new Samsung phone comes with quad rear cameras and a hole-punch display design. … [+2911 chars]"
      },
      {
         "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
         },
         "author": "Amit Kumar",
         "title": "India vs England: 'Bowl good line and length deliveries': Ashish Nehra's advice to Team India - Times of India",
         "description": "Cricket News: Former India cricketer Ashish Nehra has advised the Team India bowlers to focus on line and length to achieve success in the two Tests that are left t",
         "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-england/india-vs-england-bowl-good-line-and-length-deliveries-ashish-nehras-advice-to-team-india/articleshow/85826507.cms",
         "urlToImage": "https://static.toiimg.com/thumb/msid-85826547,width-1070,height-580,imgsize-65384,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
         "publishedAt": "2021-09-01T06:46:00Z",
         "content": "India vs England: 'Bowl good line and length deliveries': Ashish Nehra's advice to Team India"
      },
      {
         "source": {
            "id": null,
            "name": "Rushlane.com"
         },
         "author": "Satya Singh",
         "title": "Royal Enfield Classic 350cc Launch Price Rs 1.84 L To Rs 2.15 L - RushLane",
         "description": "All new 2021 Royal Enfield Classic 350cc motorcycle has been launched in India. Price starts from Rs 1.84 lakh and goes to Rs 2.15 lakh.",
         "url": "https://www.rushlane.com/royal-enfield-classic-350cc-launch-price-rs-1-84-l-to-rs-2-51-l-12411294.html",
         "urlToImage": "https://www.rushlane.com/wp-content/uploads/2021/08/new-royal-enfield-classic-350-launch-price-variants-colours-9.jpg",
         "publishedAt": "2021-09-01T06:22:50Z",
         "content": "New Royal Enfield Classic 350\r\nRoyal Enfield has launched the all-new Classic 350 at a starting price of Rs 1.84 lakh for the Redditch Series. Classic 350 Halcyon range is priced from Rs 1.93 lakh. 2… [+3460 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "News18"
         },
         "author": "Rounak Kumar Gunjan",
         "title": "Half-a-Month into New Afghanistan, and People are Dying. How? By Singing, Protesting, Existing as Women - News18",
         "description": "Taliban may have positioned itself as a more liberal edition of its past but its actions are far from it.",
         "url": "https://www.news18.com/news/world/half-a-month-into-new-afghanistan-and-people-are-dying-how-by-singing-protesting-existing-as-women-4151411.html",
         "urlToImage": "https://images.news18.com/ibnlive/uploads/2021/08/kabul-blast-wounded-162999287516x9.jpg",
         "publishedAt": "2021-09-01T06:18:00Z",
         "content": "Taliban may have positioned itself as a more liberal edition of its past but its actions are far from it. In little over two weeks since it took over Kabul, the militant organisation has tortured and… [+4871 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "Hindustan Times"
         },
         "author": "HT Entertainment Desk",
         "title": "Jaya Bachchan once told Abhishek Bachchan to 'look out' for Raqesh Bapat: 'He's your competition' - Hindustan Times",
         "description": "Jaya Bachchan had once told Abhishek Bachchan that Raqesh Bapat was his competition. Amitabh Bachchan had complimented his debut film Tum Bin. | Bollywood",
         "url": "https://www.hindustantimes.com/entertainment/bollywood/jaya-bachchan-once-told-abhishek-bachchan-to-look-out-for-raqesh-bapat-he-s-your-competition-101630475538601.html",
         "urlToImage": "https://images.hindustantimes.com/img/2021/09/01/1600x900/Raqesh_Bapat_Abhishek_Bachchan_1630476045514_1630476047603.jpg",
         "publishedAt": "2021-09-01T06:17:21Z",
         "content": "Veteran actor Jaya Bachchan had once called actor Raqesh Bapat her son Abhishek Bachchan's 'competition'. She had also told Abhishek to 'look out' for him.\r\nIn a recent interview, Raqesh recalled act… [+1977 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "Moneycontrol"
         },
         "author": null,
         "title": "Won't interfere in Kashmir, we want to have a good relation with India, says Taliban's Anas Haqqani - Moneycontrol",
         "description": "Haqqani, 28, speaks at length on the Haqqani network’s Pakistan connection and relationship with India while  rejecting accusations of terrorism against the guerrilla group controlled by his family and promising to provide complete security to all Afghan Sikh…",
         "url": "https://www.moneycontrol.com/news/world/wont-interfere-in-kashmir-we-want-to-have-a-good-relation-with-india-says-talibans-anas-haqqani-7413891.html",
         "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/09/anas-haqqani-16304341153x2-653x435.jpg",
         "publishedAt": "2021-09-01T06:14:57Z",
         "content": "After the United States withdrew its troops from Afghanistan bringing to an end its longest war in history, Anas Haqqani, the Taliban leader and scion of Afghanistans feared Haqqani Network has calle… [+6509 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "Moneycontrol"
         },
         "author": null,
         "title": "D-Street Buzz: 11 Sensex stocks hit 52-week high - Moneycontrol.com",
         "description": "Analysts pointed out some momentum indicators are indicating Nifty is in overbought territory.",
         "url": "https://www.moneycontrol.com/news/business/markets/d-street-buzz-11-sensex-stocks-hit-their-fresh-52-week-high-7415021.html",
         "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/09/Delisting-770x433.jpg",
         "publishedAt": "2021-09-01T05:54:38Z",
         "content": "As many as 11 components of the 30-share pack Sensex hit their fresh 52-week high in intraday trade on September 1.\r\nThose 11 stocks were Asian Paints, Axis Bank, Bajaj Finserv, Bajaj Finance, Bharti… [+1933 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "BloombergQuint"
         },
         "author": "Pallavi Nahata",
         "title": "Did It Rise? Or Did It Fall? Making Sense Of Q1 GDP Data - BloombergQuint",
         "description": "On a quarter-on-quarter seasonally adjusted basis, the impact of the second wave was about a third of the first wave.",
         "url": "https://www.bloombergquint.com/business/did-it-rise-or-did-it-fall-making-sense-of-q1-gdp-data",
         "urlToImage": "https://gumlet.assettype.com/bloombergquint%2F2021-08%2F478ae95b-af6f-43a7-b26b-27fbdf9ac6e8%2F373046590.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
         "publishedAt": "2021-09-01T05:45:54Z",
         "content": "Using the same lens of quarter-on-quarter seasonally adjusted data, consumption fell by about 9% in the first quarter, said Nandi. This compares to over 3% growth in the preceding quarter and a drop … [+780 chars]"
      },
      {
         "source": {
            "id": "google-news",
            "name": "Google News"
         },
         "author": null,
         "title": "COVID-19 Live Updates: First Case of Deadly AY.12 Mutation of Delta COVID Variant Reported In Uttarakhand - TheHealthSite",
         "description": "Meanwhile, India registers 30,941 new cases of coronavirus infection in a span of 24 hours. The country's total tally of COVID-19 cases now stands at 3,27,68,880. Follow this space for all news, information, and updates on COVID-19.",
         "url": "https://news.google.com/__i/rss/rd/articles/CBMiemh0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL25ld3MvY29yb25hdmlydXMtaW4taW5kaWEtY292aWQtMTktY2FzZXMtdmFjY2luZS1saXZlLW5ld3MtdXBkYXRlcy0wMS1zZXB0ZW1iZXItMjAyMS04MzQ5NjEv0gF-aHR0cHM6Ly93d3cudGhlaGVhbHRoc2l0ZS5jb20vbmV3cy9jb3JvbmF2aXJ1cy1pbi1pbmRpYS1jb3ZpZC0xOS1jYXNlcy12YWNjaW5lLWxpdmUtbmV3cy11cGRhdGVzLTAxLXNlcHRlbWJlci0yMDIxLTgzNDk2MS9hbXAv?oc=5",
         "urlToImage": null,
         "publishedAt": "2021-09-01T05:45:00Z",
         "content": null
      },
      {
         "source": {
            "id": null,
            "name": "Android Authority"
         },
         "author": null,
         "title": "New Xiaomi 11T series render leaks: Triple rear cameras, colorways on show - Android Authority",
         "description": "A new official-looking render of the Xiaomi 11T and 11T Pro have leaked shedding light on the design features and styling we could expect.",
         "url": "https://www.androidauthority.com/xiaomi-11t-series-design-2745505/",
         "urlToImage": "https://cdn57.androidauthority.net/wp-content/uploads/2019/12/Xiaomi-Mi-9-Pro-5G-logo-on-back-closeup.jpg",
         "publishedAt": "2021-09-01T05:38:45Z",
         "content": "<ul><li>An official-looking render of Xiaomis upcoming 11T series has leaked.<li><li>The phones could seemingly sport similar styling with internal differences.<li><li>Xiaomi is due to host a launc… [+1674 chars]"
      },
      {
         "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
         },
         "author": "TIMESOFINDIA.COM",
         "title": "Coronavirus Explainer: How does your body remember the SARs-COV-2 virus? - Times of India",
         "description": "The second wave of coronavirus had a devastating impact on people's lives. Many were infected, some succumbed to the virus, while others continue to experience long COVID symptoms.",
         "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/coronavirus-explainer-how-does-your-body-remember-the-sars-cov-2-virus/photostory/85795668.cms",
         "urlToImage": "https://static.toiimg.com/photo/85795719.cms",
         "publishedAt": "2021-09-01T05:30:00Z",
         "content": "As per two recent, non-peer-reviewed studies, people who recovered from COVID-19 produced a robust immune response that was superior to vaccination alone, and adding one or more vaccine doses offered… [+1049 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "India.com"
         },
         "author": "Zee Media Bureau",
         "title": "India reports 41,965 new COVID-19 cases, 460 deaths in 24 hours - Zee News",
         "description": "India has reported 41,965 new cases of COVID-19 infections in the past 24 hours, the Union Health and Family Welfare Ministry said in a statement on Wednesday. During this period, the country also reported 460 deaths due to the COVID-19, it added.",
         "url": "https://zeenews.india.com/india/india-reports-41965-new-covid-19-cases-460-deaths-in-24-hours-2390240.html",
         "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2021/09/01/966446-covid-india-new.jpg",
         "publishedAt": "2021-09-01T04:38:45Z",
         "content": "NEW DELHI: India has reported 41,965 new cases of COVID-19 infections in the past 24 hours, the Union Health and Family Welfare Ministry said in a statement on Wednesday.\r\nDuring this period, the cou… [+2141 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "Hindustan Times"
         },
         "author": "hindustantimes.com",
         "title": "'Best military': What Joe Biden told Ashraf Ghani in their last phone call on July 23 - Hindustan Times",
         "description": "Going through the phone call, Reuters claimed that it is clear that neither Joe Biden nor Ashraf Ghani could anticipate the fall of Ghani's government within a few weeks from then. | World News",
         "url": "https://www.hindustantimes.com/world-news/best-military-what-joe-biden-told-ashraf-ghani-in-their-last-phone-call-on-july-23-101630467915621.html",
         "urlToImage": "https://images.hindustantimes.com/img/2021/09/01/1600x900/biden_ghani_1630470382983_1630470385527.JPG",
         "publishedAt": "2021-09-01T04:30:30Z",
         "content": "US President Joe Biden and former Afghanistan President Ashraf Ghani spoke for the last time on July 23, weeks before the fall of Kabul on August 15, which saw Ghani leaving the country leading to an… [+3731 chars]"
      },
      {
         "source": {
            "id": null,
            "name": "The New Indian Express"
         },
         "author": "PTI",
         "title": "Breakthrough COVID-19 infections found in 25 per cent vaccinated healthcare staff: Study - The New Indian Express",
         "description": "However, the severity of the infection was low and vaccination is crucial to avoid severe illnesses, said Shantanu Sengupta, senior scientist with the IGIB and one of the lead researchers of the study",
         "url": "https://www.newindianexpress.com/nation/2021/sep/01/breakthrough-covid-19-infections-found-in-25-per-cent-vaccinated-healthcare-staff-study-2352708.html",
         "urlToImage": "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/30/w600X390/vaccine_AFP1.jpg",
         "publishedAt": "2021-09-01T04:17:00Z",
         "content": "NEW DELHI: A little more than 25 per cent of healthcare workers were infected with coronavirus despite getting fully jabbed, a recent study has revealed, giving an insight on the breakthrough infecti… [+1766 chars]"
      }
   ]
   constructor() {
      super();
      this.state = {
         articles: this.articles,
         loading: false,
         page: 1
      }
   }

   async update(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
   }

   async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9939e5e494fe47b7b2c10e6489420ca9&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
   }
   handlePrevclick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9939e5e494fe47b7b2c10e6489420ca9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
         page: this.state.page - 1,
         articles: parsedData.articles,
         loading: false 
      })
      // this.setState({page: this.state.page -1})
      // this.update();

   }
   handleNextclick = async () => {
      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9939e5e494fe47b7b2c10e6489420ca9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
         this.setState({loading: true});
         let data = await fetch(url);
         let parsedData = await data.json();
         this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
         }) 
      }
      // this.setState({page: this.state.page +1})
      // this.update();


   }

   render() {
      return (
         <div className="container my-3">
            <h1 className="text-center " style={{margin: '35px 0px' ,marginTop: '90px'}}>My News - Top Headlines</h1>
            {this.state.loading && < Spinner/>}
            <div className="row">
               {this.state.articles.map((element) => {

                  return <div className="col-md-4" key={element.url}>
                     <NewsItems title={element.title ? element.title.slice(0, 150) : ""} description={element.description ? element.description.slice(0, 200) : ""} imgurl={element.urlToImage} newsUrl={element.url}
                     author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>


               })}
            </div>
            <div className="container d-flex justify-content-between">
               <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevclick}>   &larr; Previous</button>
               <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-success" onClick={this.handleNextclick}>Next &rarr;</button>
            </div>
         </div>
      )
   }
}

export default News
