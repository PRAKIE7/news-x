import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps={
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalize = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    articles= [
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Kelly Kasulis Cho",
          "title": "Mexican survivor of Seoul Halloween crush feared she'd die in Itaewon - The Washington Post",
          "description": "Juliana Velandia Santaella was trapped in an Itaewon alley, with only her head above piles of people. She felt like her lungs were being flattened.",
          "url": "https://www.washingtonpost.com/world/2022/10/31/seoul-halloween-crush-mexico-survivor-itaewon/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CILDQBIMPZG4I562VAYOZHM74I.JPG&w=1440",
          "publishedAt": "2022-10-31T08:45:50Z",
          "content": "Comment on this story\r\nJuliana Velandia Santaella took a photo of young women dressed up as bananas, a hot dog and french fries on the streets of Itaewon at 10:08 p.m. Saturday night. Then she decide… [+4080 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "Russia rains missiles on Kyiv, other cities after pulling out of grain deal - Reuters",
          "description": "Blasts were heard in Kyiv on Monday and Ukrainian authorities reported Russian missile strikes around the country, after Moscow blamed Kyiv for an attack on its Black Sea fleet and pulled out of a deal to allow Ukrainian grain shipments.",
          "url": "https://www.reuters.com/world/europe/un-turkey-ukraine-press-ahead-with-black-sea-grain-deal-despite-russian-pullout-2022-10-31/",
          "urlToImage": "https://www.reuters.com/resizer/-F1TA_kByZYjUarDCgbfL7lOIUs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IWYQYXD75JPXJDON526ZDYYNSY.jpg",
          "publishedAt": "2022-10-31T07:49:00Z",
          "content": "KYIV, Oct 31 (Reuters) - Blasts were heard in Kyiv on Monday and Ukrainian authorities reported Russian missile strikes around the country, after Moscow blamed Kyiv for an attack on its Black Sea fle… [+3113 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "Lula wins Brazilian election, Bolsonaro has not conceded - Reuters Canada",
          "description": "Brazilian leftist leader Luiz Inacio Lula da Silva narrowly defeated President Jair Bolsonaro in a runoff election, but the far right incumbent did not concede defeat on Sunday night, raising concerns that he might contest the result.",
          "url": "https://www.reuters.com/world/americas/lula-wins-brazilian-election-bolsonaro-has-not-conceded-2022-10-31/",
          "urlToImage": "https://www.reuters.com/resizer/JXRdVP18pDrf3O8LnMDAqSKFECg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GPPXNDHZ3BML7L2V6R3PZN6GDE.jpg",
          "publishedAt": "2022-10-31T06:36:00Z",
          "content": "SAO PAULO/BRASILIA, Oct 31 (Reuters) - Brazilian leftist leader Luiz Inacio Lula da Silva narrowly defeated President Jair Bolsonaro in a runoff election, but the far right incumbent did not concede … [+3954 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "Exclusive: Output of Apple iPhones at major China plant could fall 30% amid COVID curbs - Reuters",
          "description": "Production of Apple Inc's (AAPL.O) iPhones could slump by as much as 30% at one of the world's biggest factories next month due to tightening COVID-19 curbs in China, a person with direct …",
          "url": "https://www.reuters.com/technology/foxconn-covid-woes-may-hit-up-30-iphone-nov-shipments-zhengzhou-plant-source-2022-10-31/",
          "urlToImage": "https://www.reuters.com/resizer/ZygW5UTLl8daWGmlom2Djt-K0Ls=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QK2FQ47XUVOSVG2VJNGNGUXCPA.jpg",
          "publishedAt": "2022-10-31T06:34:00Z",
          "content": "TAIPEI, Oct 31 (Reuters) - Production of Apple Inc's (AAPL.O) iPhones could slump by as much as 30% at one of the world's biggest factories next month due to tightening COVID-19 curbs in China, a per… [+3264 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Deirdre Reilly",
          "title": "Walking Dead Syndrome and other rare conditions that baffle doctors and researchers - Fox News",
          "description": "Here are three strange and rare medical conditions that baffle doctors, along with case studies: Walking Dead Syndrome, Alice in Wonderland Syndrome and Foreign Accent Syndrome.",
          "url": "https://www.foxnews.com/lifestyle/walking-dead-syndrome-rare-conditions-baffle-doctors-researchers",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/10/illusion-split.jpg",
          "publishedAt": "2022-10-31T06:00:09Z",
          "content": "Rare and odd medical syndromes are hard for many people to understand and are often hard to treat, according to medical experts. \r\nRead on to learn more about three unusual and baffling disorders.\r\nI… [+7190 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "NYC to pay $26M in settlement with men wrongly convicted of killing Malcolm X - Eyewitness News ABC7NY",
          "description": "The city of New York is settling lawsuits filed on behalf of two men who were exonerated last year for the 1965 assassination of Malcolm X. Check out more Ey...",
          "url": "https://www.youtube.com/watch?v=XQrPVSZZ2Do",
          "urlToImage": "https://i.ytimg.com/vi/XQrPVSZZ2Do/maxresdefault.jpg",
          "publishedAt": "2022-10-31T05:46:09Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "",
          "title": "NFL Week 8 grades: Broncos get an 'A-' for saving their season in London, Bills get a 'B' for Sunday night win - CBS Sports",
          "description": "Here are the Week 8 grades for every team that played on Sunday",
          "url": "https://www.cbssports.com/nfl/news/nfl-week-8-grades-broncos-get-an-a-for-saving-their-season-in-london-bills-get-a-b-for-sunday-night-win/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/10/30/1a38cb6c-66d2-4d42-91a6-e826dd8ca997/thumbnail/1200x675/3e6bc6ebceef6ff9d53c7afebb66da5f/wilsonruss.jpg",
          "publishedAt": "2022-10-31T04:39:00Z",
          "content": "Maybe the Broncos should consider moving all of their games to London. \r\nThrough the first seven weeks of the season, the Broncos offense has mostly looked helpless, but that changed on Sunday in Eng… [+4872 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "John Power",
          "title": "Bankers blasted for ‘whitewashing’ China’s crackdown on Hong Kong - Al Jazeera English",
          "description": "Activists and US legislators say banking summit being used to legitimise the dismantling of city’s freedoms.",
          "url": "https://www.aljazeera.com/economy/2022/10/31/wall-street-blasted-for-whitewashing-hong-kong-crackdown",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/10/2022-06-04T124216Z_732924473_RC20LU9Z81WY_RTRMADP_3_CHINA-TIANANMEN-HONGKONG.jpg?resize=1920%2C1440",
          "publishedAt": "2022-10-31T04:21:20Z",
          "content": "Kuala Lumpur, Malaysia Hong Kongs government invited Wall Streets biggest names to a summit to show the financial hub is open for business after nearly three years of isolation due to pandemic curbs.… [+7092 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Khloé Kardashian's Daughter True Holds Baby Brother At Halloween Party In Rare Sibling Photo - Access",
          "description": "Khloe Kardashian's baby boy is celebrating his first Halloween! \"The Kardashians\" star took her three-month-old son and her daughter True to a family Hallowe...",
          "url": "https://www.youtube.com/watch?v=Q6eSkbSz7_4",
          "urlToImage": "https://i.ytimg.com/vi/Q6eSkbSz7_4/maxresdefault.jpg",
          "publishedAt": "2022-10-31T04:09:13Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Green Bay Packers vs. Buffalo Bills | 2022 Week 8 Game Highlights - NFL",
          "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
          "url": "https://www.youtube.com/watch?v=1WwBq42po14",
          "urlToImage": "https://i.ytimg.com/vi/1WwBq42po14/maxresdefault.jpg",
          "publishedAt": "2022-10-31T03:40:11Z",
          "content": null
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Niamh Kennedy, Abdul Nasir",
          "title": "Violent clashes break out between students and security forces across Iran, rights groups say - CNN",
          "description": "Violent clashes broke out between security forces and student protesters at university campuses across Iran on Sunday, according to activist and human rights groups in the country.",
          "url": "https://www.cnn.com/2022/10/30/middleeast/iran-protests-clashes-sunday-intl/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221027093850-iran-traffic-vpx.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2022-10-31T03:09:00Z",
          "content": "Violent clashes broke out between security forces and student protesters at university campuses across Iran on Sunday, according to activist and human rights groups in the country.\r\nStudents continue… [+2925 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Abigail Ng",
          "title": "Asia-Pacific stocks mixed as China's factory and services activity contracts - CNBC",
          "description": "Shares in the Asia-Pacific were mixed on Monday as China factory activity missed expectations, and as the market looks ahead to the U.S. Fed meeting this week.",
          "url": "https://www.cnbc.com/2022/10/31/asia-markets-china-pmi-stocks-currencies-oil-economic-data.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107132230-1665444692419-gettyimages-1237689867-JAPAN_STOCK.jpeg?v=1667173308&w=1920&h=1080",
          "publishedAt": "2022-10-31T02:36:00Z",
          "content": "Shares in the Asia-Pacific were mixed on Monday as China factory activity missed expectations, and as markets look ahead to the U.S. Fed meeting later this week.\r\nHong Kong's Hang Seng index was frac… [+833 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Musk Twitter takeover: Billionaire denies report he plans to fire workers to avoid payouts - BBC",
          "description": "The world's richest man completed his takeover of the platform last week after months of legal wrangling.",
          "url": "https://www.bbc.com/news/business-63451979",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8C49/production/_127431953_hi079886996.jpg",
          "publishedAt": "2022-10-31T02:23:34Z",
          "content": "Elon Musk has denied a New York Times report that he plans to lay off Twitter workers before the start of next month to avoid having to make payouts.\r\nReplying to a Twitter user asking about the repo… [+2113 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gainesville Sun"
          },
          "author": "Javon L. Harris, Gainesville Sun",
          "title": "RSV, flu and COVID could result in tripledemic, some experts say - Gainesville Sun",
          "description": "Hospitals are reporting a rare increase in the number of small children becoming infected with a common respiratory illness akin to the common-cold.",
          "url": "https://www.gainesville.com/story/news/2022/10/30/rsv-flu-covid-could-result-tripledemic-some-experts-say/10613654002/",
          "urlToImage": "https://www.gannett-cdn.com/presto/2022/10/27/NSBT/2ccd9909-d4dd-4381-b042-a448785b5a63-RSV_Harris_001.JPG?auto=webp&crop=3095,1741,x0,y172&format=pjpg&width=1200",
          "publishedAt": "2022-10-31T02:08:51Z",
          "content": "A respiratory virus is surging across Florida and other parts of the country, causing health experts to warn of a potential “tripledemic” during the next several months.\r\nSome hospitals are reporting… [+5859 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Gregory Krieg",
          "title": "Five takeaways from the second Georgia gubernatorial debate - CNN",
          "description": "Georgia Republican Gov. Brian Kemp and Democratic nominee Stacey Abrams faced off in their second and final gubernatorial debate Sunday night, with a little more than a week to go before Election Day amid record high early voting.",
          "url": "https://www.cnn.com/2022/10/30/politics/georgia-governors-debate-takeaways/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221031091148-georgia-debate-103022.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2022-10-31T02:03:00Z",
          "content": "Georgia Republican Gov. Brian Kemp and Democratic nominee Stacey Abrams faced off in their second and final gubernatorial debate Sunday night, with a little more than a week to go before Election Day… [+9103 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Kotaku"
          },
          "author": "Luke Plunkett",
          "title": "Streamer Who Broke Back At TwitchCon Shows Off Scar, Details Recovery - Kotaku",
          "description": "A casual jump into a foam pit has been a life-changing experience for Adriana Chechik",
          "url": "https://kotaku.com/adriana-chechik-twitchcon-break-back-injury-scar-stream-1849721571",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eeafa5937556444f14cd5548b6de511f.jpg",
          "publishedAt": "2022-10-31T00:30:00Z",
          "content": "Adriana Chechik, who made headlines earlier this month after she broke her back in two places at TwitchCon, has returned to streaming with some updatesand a close lookat how her recovery has been goi… [+1572 chars]"
        },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": "Jeff Pegues, Gina Martinez",
          "title": "Paul Pelosi attack: Suspect in attack on Nancy Pelosi's husband had list of targets, law enforcement sources say - CBS News",
          "description": "The suspect allegedly broke into the couple's home around 2 a.m. on Friday, shouting \"Where is Nancy?\"",
          "url": "https://www.cbsnews.com/news/paul-pelosi-attack-suspect-target-list-sources-say-nancy-pelosi-husband/",
          "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/10/29/ad7b4111-359d-4f74-a159-ad7bde92f443/thumbnail/1200x630/a72d6b0b8c97185bb1696f96575bceeb/ap22301555229505.jpg",
          "publishedAt": "2022-10-31T00:19:00Z",
          "content": "The suspect in the attack on House Speaker Nancy Pelosi's husband Paul Pelosi had a list of people he wanted to target, law enforcement sources briefed on the investigation confirmed to CBS News. \r\nD… [+2402 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Samantha Lock",
          "title": "Russia-Ukraine war at a glance: what we know on day 250 of the invasion - The Guardian",
          "description": "Kremlin pulls out of grain deal after drone attack on Russia’s Black Sea flagship vessel in Crimea; UN and US call on Moscow to reverse its decision",
          "url": "https://www.theguardian.com/world/2022/oct/31/russia-ukraine-war-at-a-glance-what-we-know-on-day-250-of-the-invasion",
          "urlToImage": "https://i.guim.co.uk/img/media/b70ded77a83fc904db55068269bbe8543eb18bd4/0_116_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f34b2fe622615cbb20121bb59d44f1ed",
          "publishedAt": "2022-10-31T00:03:00Z",
          "content": "Russian foreign minister, Sergei Lavrov, expressed hope that Joe Biden will recall the 1962 Cuban missile crisiswhen dealing with the war in Ukraine. In an interview for a Russian state television do… [+467 chars]"
        },
        {
          "source": {
            "id": "buzzfeed",
            "name": "Buzzfeed"
          },
          "author": "Karlton Jahmal",
          "title": "Jennifer Coolidge Says Her Character Needs Sex Scenes, And More \"The White Lotus\" Season 2 Cast Takes - BuzzFeed",
          "description": "Another season of sex, murder, and mayhem.",
          "url": "https://www.buzzfeed.com/karltonjahmal/jennifer-coolidge-and-the-white-lotus-cast-talk-sex-bad",
          "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-10/28/20/enhanced/eb955afb92f6/original-4766-1666987933-29.jpg?crop=1243:651;0,15%26downsize=1250:*",
          "publishedAt": "2022-10-31T00:01:02Z",
          "content": "HLR: She's (Jennifer Coolidge's character's) assistant, and she shows up and she's broke. So she's not one of the, like, fancy, you know, really wealthy people, but she's still very unaware and self-… [+387 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Motorsport.com"
          },
          "author": "Jim Utter",
          "title": "Ross Chastain \"fully committed\" to banzai last-lap NASCAR move - Motorsport.com",
          "description": "Ross Chastain used a daring video game-like move on the final lap in Sunday’s race at Martinsville to charge his way into the NASCAR Cup Series title race.",
          "url": "https://www.motorsport.com/nascar-cup/news/ross-chastain-wall-riding-playoffs-hamlin-martinsville/10393086/",
          "urlToImage": "https://cdn-1.motorsport.com/images/amp/0a9eRVX0/s6/ross-chastain-trackhouse-racin.jpg",
          "publishedAt": "2022-10-30T23:22:55Z",
          "content": "As the final lap of 500 laps began on Sunday, Ross Chastain was in dire straits, trailing Denny Hamlin by two points in the standings for the final spot in the Championship 4 and running 10th in the … [+2609 chars]"
        }
      ]
      
    constructor(props){
        super(props);
        this.state={
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title= `NewsX- ${this.capitalize(this.props.category)}`;
    }

    async componentDidMount(){
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parsedData = await data.json()
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

    handlePrevClk= async ()=> {
      console.log("Previous");
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parsedData = await data.json()

      this.setState({ 
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false 
      })
    }

    handleNxtClk= async ()=> {
      console.log("Next");
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parsedData = await data.json()
      this.setState({ 
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false 
      })
    }
    
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:"80px"}}>Top Headlines by News-X</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-2">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description? element.description.slice(0,90):""} imgURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClk}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults)/10} type="button" className="btn btn-dark" onClick={this.handleNxtClk}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}
