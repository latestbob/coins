import React from 'react';

import './home.css';

import logo from './logo.svg';
import twitter from './twitter.svg';
import discord from './discord.svg';
import telegram from './telegram.svg';
import reddit from './reddit.svg';

import binance from './binance.svg';
import ethereum from './ethereum.svg';
import polygon from './polygon.svg';
import hedera from './hedera.svg';
import fantom from './fantom.svg';
import near from './near.svg';
import terra from './terra.svg';

import stake from './stake.webp';
import receive from './receive.webp';
import defi from './defi.webp';
import security from './security.webp';

import pantera from './pantera.webp';
import coinbase from './coinbase-ventures.webp';
import jump from './jump-crypto.webp';
import block from './blockchain-com.webp';
import trueventure from './true-ventures.webp';

import ledger from './ledger.webp';
import aave from './aave.webp';
import balancer from './balancer.webp';
import beef from './beefy.webp';

import swissborg from './swissborg.webp';
import quick from './quickswap.webp';
import anchorage from './anchorage.webp';
import bitgo from './bitgo.webp';

import { useState } from 'react';
import MyCards from './mycard';

import okx from './okx.svg';
import gate from './gate-io.webp';
import huobi from './huobi.svg';
import bybit from './bybit.webp';
import kucoin from './kucoin.webp';
import crypto from './crypto-com.webp';

import blogone from './blogone.png';
import blogtwo from './blogtwo.png';
import blogthree from './blogthree.jpeg';
import footlogo from './footlogo.png';

import MyCardTwo from './mycarttwo';

import community from './community-forum.svg';
import  snapshot from './snapshot.svg';
import sd from './sd.svg';
import sdtwo from './sdtwo.svg';

import MyCardThree from './mycardthree';

import github from './github.svg';
import eth from './ethereum.svg';
import doc from  './docs.svg';

import blog from './blogs.svg';
import download from './download.svg';
import stadericon from './stadertwo.svg';
import { Link } from 'react-router-dom';
import MyCardFive from './cardfive';

import hamburger from './hamburger.svg';
import { useEffect } from 'react';
import ethwhite from './ethereum-white.svg';
import polygonwhite from './polygon-white.svg';
import hederawhite from './hedera-white.svg';
import bnbwhite from './binance-white.svg';
import fantomwhite from './fantom-white.svg';
import nearwhite from './near-white.svg';
import terrawhite  from './terra-white.svg';


function Home(){


    // const [isHovered, setIsHovered] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // }

    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling when menu is closed
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


    return (

        <>
            {/* nav */}

            <nav className='mobilenav py-2 px-4 fixed-top'>
                <img onClick={toggleMenu} className='hamb' src={hamburger} />  <a class="navbar-brand" href="#"><img className='mobilelogoimage' src={logo} /><span className='logohead'>Stader</span></a>

            </nav>


           {menuOpen && ( <div className='mobile-menu hidelarge mt-3'>
                
               <div className='flexfirst mt-5 px-2'>

                   <div className='logofirst'>
                   <a class="navbar-brand" href="#"><img className='mobilelogoimage' src={logo} /><span className='text-light'>Stader</span></a>

                   </div>

                   <div className='socialfirst mt-2'>
                        <div className='flexdiv'>
                            <a href="https://twitter.com/staderlabs"><img className='topicontwo' src={twitter} /></a>
                            <a href='https://discord.com/invite/xJURAhSmav'><img className='topicontwo' src={discord} /></a>
                            <a  href='https://t.me/staderlabs'><img className='topicontwo' src={telegram} /></a>
                            <a href='https://www.reddit.com/r/StaderLabs_Official/'> <img className='topicontwo' src={reddit} /></a>

                        </div>

                   </div>

               </div>
                

          <ul>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={ethwhite} />Ethereum </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={polygonwhite} />Polygon </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={hederawhite} />Hedera </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={bnbwhite} />BNB </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={fantomwhite} />Fantom </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={nearwhite} />Near </li>
            <li className='whitelist py-2'><img className='whiteicon mr-3'src={terrawhite} />Terra 2.0 </li>
           
          </ul>

          <div class="dropdown">
            <a class="dropdown-toggle mytoggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Governance
            </a>
            <div class="dropdown-menu mydrop" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item mydropitems" href="https://forum.staderlabs.com/">Commuity Forum</a>
                <a class="dropdown-item mydropitems" href="https://snapshot.org/#/staderdao.eth">Snapshot</a>
                <a class="dropdown-item mydropitems" href="https://www.staderlabs.com/sd/defi/">SD DeFi</a>
                <a class="dropdown-item mydropitems" href="https://staderlabs.notion.site/staderlabs/Introducing-SD-1160c9a4217d477eaafb963e21f90aba">SD Details</a>
            </div>
            </div>


            <div class="dropdown">
            <a class=" mytoggle">
                Analytics
            </a>
           
            </div>

            <div class="dropdown">
            <a class="dropdown-toggle mytoggle"  id="dropdownMenuButtonTwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Developers
            </a>
            <div class="dropdown-menu mydrop" aria-labelledby="dropdownMenuButtonTwo">
                <a class="dropdown-item mydropitems" href="https://forum.staderlabs.com/">Github</a>
                <a class="dropdown-item mydropitems" href="https://www.staderlabs.com/docs/ETHx%20Litepaper.pdf">ETHx Litepaper</a>
                <a class="dropdown-item mydropitems" href="https://www.staderlabs.com/docs/">Docs</a>

            </div>
            </div>

            <div class="dropdown">
            <a class="dropdown-toggle mytoggle"  id="dropdownMenuButtonThree" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
            </a>
            <div class="dropdown-menu mydrop" aria-labelledby="dropdownMenuButtonThree">
                <a class="dropdown-item mydropitems" href="https://www.staderlabs.com/about-stader/">About Stader</a>
                <a class="dropdown-item mydropitems" href="https://www.staderlabs.com/blogs/">Blogs</a>
                <a class="dropdown-item mydropitems" href="https://www.staderlabs.com/Stader_press_kit.zip">Download Press Kit</a>

            </div>
            </div>




        </div>
           )

    }

            



            <nav class="navbar fixed-top navbar-expand-lg mynav navbar-light desktopnav">
  <a class="navbar-brand" href="#"><img className='logoimage' src={logo} /><span className='logohead'>Stader</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto pl-5">

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Network
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown"data-toggle="collapse" href="#collapseExampleTwo" role="button" aria-expanded="false" aria-controls="collapseExampleTwo" >
         Governance
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>


      <li className="nav-item mylink">
        <a className="nav-link" href="https://dune.com/stader_labs/dashboard-catalogue">Analytics</a>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="collapse" href="#collapseExampleThree" role="button" aria-expanded="false" aria-controls="collapseExampleThree">
         Developers
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown"  data-toggle="collapse" href="#collapseExampleFour" role="button" aria-expanded="false" aria-controls="collapseExampleFour">
         About
        </a>
        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <div className='flexdiv'>
          <a href="https://twitter.com/staderlabs"><img className='topicon' src={twitter} /></a>
         <a href='https://discord.com/invite/xJURAhSmav'><img className='topicon' src={discord} /></a>
          <a  href='https://t.me/staderlabs'><img className='topicon' src={telegram} /></a>
         <a href='https://www.reddit.com/r/StaderLabs_Official/'> <img className='topicon' src={reddit} /></a>

      </div>
      <Link to={'/wallets'} class="btn mybtn my-2 my-sm-0" type="submit">Connect Wallet</Link>
    </form>
  </div>
</nav>


            {/* nav */}

{/* netowrk collaspe */}

<div className="collapse fixed-top" id="collapseExample">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              <h5 className='networksmall'>Networks</h5>
              <h2 className='networkbig my-2'>Networks</h2>
              <p className='networkpara my-2'>Earn more DeFi returns with liquid staking</p>

          </div>

          <div className='col-md-8'>
          <div className='carddiv container mt-5'>

           

                <MyCardTwo brand="Ethereum" amount="TVL : $73M" image={ethereum} />
                <MyCardTwo brand="Polygon" amount="TVL : $67M" image={polygon} />

                <MyCardTwo brand="Hedera" amount="TVL : $22M" image={hedera} />

                <MyCardTwo brand="BNB" amount="TVL : $14M" image={binance} />

            </div>


            <div className='carddiv container mt-5'>

           

                <MyCardTwo  brand="Fantom" amount="TVL : $2.5M" image={fantom}/>
                <MyCardTwo brand="Near" amount="TVL : $757K" image={near} />

                <MyCardTwo brand="Terra 2.0" amount="TVL : $546K" image={terra} />
                <div style={{
                    visibility:"hidden",
                }}>
                    <MyCardTwo brand="Terra 2.0" amount="TVL : $546K" image={terra} />
                </div>
                

                </div>

          </div>

      </div>
  
 
</div> 

{/* Governance */}

<div className="collapse" id="collapseExampleTwo">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>Governance</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           

<MyCardThree brand="Commuity Forum"url="https://forum.staderlabs.com/"  image={community} />
<MyCardThree brand="Snapshot"url="https://snapshot.org/#/staderdao.eth" image={snapshot} />

<MyCardThree brand="SD DeFi"url="https://www.staderlabs.com/sd/defi/"  image={sd} />

<MyCardThree brand="SD Details"url="https://staderlabs.notion.site/staderlabs/Introducing-SD-1160c9a4217d477eaafb963e21f90aba"  image={sdtwo} />

</div>
       



          </div>

      </div>
  
 
</div> 



{/* developers */}

<div className="collapse" id="collapseExampleThree">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>Developers</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           
<div style={{
    visibility:"hidden",
}}>
<MyCardThree brand="Docs"url=""  image={doc} />
</div>
<MyCardThree brand="Github" url="" image={github} />
<MyCardThree brand="ETHx Litepaper"url="https://www.staderlabs.com/docs/ETHx%20Litepaper.pdf" image={eth} />

<MyCardThree brand="Docs"url="https://www.staderlabs.com/docs/"  image={doc} />


</div>
       



          </div>

      </div>
  
 
</div> 


{/* About */}


<div className="collapse" id="collapseExampleFour">
  
      <br/>

      <div className='row'>

          <div className='col-md-4'>
              
              <h2 className='networkbig my-2'>About</h2>
              

          </div>

          <div className='col-md-8'>

          <div className='carddiv container mt-5'>

           
<div style={{
    visibility:"hidden",
}}>
<MyCardThree brand=""  image={doc} />
</div>
<MyCardThree brand="About Stader"url="https://www.staderlabs.com/about-stader/"  image={stadericon} />
<MyCardThree brand="Blogs"url="https://www.staderlabs.com/blogs/" image={blog} />

<MyCardThree brand="Download Press Kit"url="https://www.staderlabs.com/Stader_press_kit.zip"  image={download} />


</div>
       



          </div>

      </div>
  
 
</div>






    <section className='herosection'>

        <div className='col-md-6'>
            <h1 className='herohead'>Unlock liquidity and <br/> amplify rewards</h1>
            <p className='heropara'>Start liquid staking securely across multiple chains</p>

            <div className='boxflex'>

                <div className='boxcontent'>
                    <p className='boxcontentpara'>ASSETS STAKED</p>
                    <h3 className='boxcontenthead'>$182M</h3>
                    


                </div>

                <div className='boxcontent mx-4'>
                    <div className='divider '></div>
                    
                </div>

                <div className='boxcontent'>
                    <p className='boxcontentpara'>USER</p>
                    <h3 className='boxcontenthead'>85K+</h3>


                </div>

                <div className='boxcontent mx-4'>
                    <div className='divider'></div>
                    
                </div>

                <div className='boxcontent'>
                    <p className='boxcontentpara'>REWARDS PAID</p>
                    <h3 className='boxcontenthead'>$25M+</h3>


                </div>

            </div>


            {/* connect button */}

            <div className='text-left mt-4'>
            <Link to={'/wallets'} class="btn mybtntwo " type="submit">Connect Wallet</Link>

            </div>
        </div>
    </section>


    {/* support section */}


    <section className='support'>

        <h2 className='supportheading'>Supported networks</h2>
        <p className='heropara text-center'>Choose your favourite network and start earning rewards</p>


    <div className='hidemobile'>
        <div className='carddiv container mt-5'>

           

            <MyCards brand="Ethereum" amount="TVL : $73M" image={ethereum} />
            <MyCards brand="Polygon" amount="TVL : $67M" image={polygon} />

            <MyCards brand="Hedera" amount="TVL : $22M" image={hedera} />
         
            <MyCards brand="BNB" amount="TVL : $14M" image={binance} />

            <MyCards brand="Fantom" amount="TVL : $2.5M" image={fantom} />
                  


        </div>


        <div className='carddivtwo container mt-4 d-flex justify-content-center'>

        <MyCards  brand="Near" amount="TVL : $757K" image={near} />

        <MyCards  brand="Terra 2.0" amount="TVL : $546K" image={terra} />

        <MyCards brand="Terra 2.0" amount="TVL : $546K" image={terra} />
           



           

            

        </div>

    </div>

       {/* mycardfive here */}
       <MyCardFive brand="Ethereum" amount="$72,852,841 staked"url="https://www.staderlabs.com/eth"image={ethereum} />

       <MyCardFive brand="Polygon" amount="$66,987,348 staked"url="https://www.staderlabs.com/polygon" image={polygon} />

       <MyCardFive brand="Hedera" amount="$21,094,092 staked"url=""image={hedera} />
       <MyCardFive brand="BNB" amount="$13,501,724 staked"url="https://www.staderlabs.com/bnb"image={binance} />
       <MyCardFive brand="Fantom" amount="$2,439,297 staked"url=""image={fantom} />
       <MyCardFive brand="Near" amount="$847,342 staked"url=""image={near} />
       <MyCardFive brand="Terra 2.0" amount="$512,710 staked"url=""image={terra} />
    </section>




    <section className='work  mt-5'>
         <h2 className='supportheading '>How Stader works</h2>

         <div className='row spacer'>

             <div className='col-md-4 workcontent text-center'>
                 <img className='workimage' src={stake} />
                 <h4 className='workhead'>Stake tokens</h4>
                 <p className='workpara'>Stake any amount of tokens and earn staking rewards</p>

             </div>

             <div className='col-md-4 workcontent text-center'>
                 <img className='workimage' src={receive} />
                 <h4 className='workhead'>Receive liquid tokens</h4>
                 <p className='workpara'>Get liquid staking tokens</p>

             </div>

             <div className='col-md-4 workcontent text-center'>
                 <img className='workimage' src={defi} />
                 <h4 className='workhead'>Participate in DeFi</h4>
                 <p className='workpara'>Use liquid tokens across 40+ DeFi protocols</p>

             </div>

         </div>

    </section>


    <section className='support'>

        <h2 className='supportheading'>Top security for your crypto</h2>
        <p className='heropara text-center'>Audited and secured by leading blockchain experts to ensure the safety of your assets</p>
        <div className='text-center mt-2 py-4'>

            <Link to={'/wallets'} className='btn btn-outline-success text-dark px-4 py-2 font-weight-700 myconnect'>Connect Wallet</Link>

         

        </div>


        <div className='text-center'>

        <img className='security' src={security} />

        </div>


        


        


       
    </section>

    <section className='partners'>
    <h2 className='supportheading '>Our partners</h2>

    <div className='greendiv py-3'>

    <ul class="nav nav-pills mb-3 myrow py-1 m-auto" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active mylink" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Private Sales</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link mylink" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ecosystem</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link mylink" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Exchange</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className='row px-5 mt-5'>
          <div className='col-md-4 coincontent '>
              <div className='spancontent'>
                  <img className='coinimage' src={pantera} />

                  <h4 className='coinhead'>Pantera Capital</h4>


              </div>


          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={coinbase} />

                  <h4 className='coinhead'>Coinbase Ventures</h4>


              </div>
              

          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={jump} />

                  <h4 className='coinhead'>Jump Crypto</h4>


              </div>
              

          </div>



      </div>

      <div className='row px-5 mt-5'>
          <div className='col-md-4 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={block} />

                  <h4 className='coinhead'>Blockchain</h4>


              </div>


          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={coinbase} />

                  <h4 className='coinhead'>True Ventures</h4>


              </div>
              

          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
             <Link to={'/wallets'} className='btn btn-outline-success text-dark px-4 py-2 font-weight-700 myconnecttwo'>Connect Wallet</Link>


              </div>
              

          </div>



      </div>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className='row px-5 mt-5'>
          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={ledger} />

                  <h4 className='coinhead'>Ledger</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={aave} />

                  <h4 className='coinhead'>Aave</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={balancer} />

                  <h4 className='coinhead'>Balancer</h4>


              </div>
              

          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={beef} />

                  <h4 className='coinhead'>Beefy Finance</h4>


              </div>
              

          </div>



</div>

<div className='row px-5 mt-5'>
          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={swissborg} />

                  <h4 className='coinhead'>Swissborg</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={quick} />

                  <h4 className='coinhead'>Quickswap</h4>


              </div>


          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={anchorage} />

                  <h4 className='coinhead'>Anchorage</h4>


              </div>
              

          </div>

          <div className='col-md-3 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={bitgo} />

                  <h4 className='coinhead'>BitGo</h4>


              </div>
              

          </div>



      </div>
  

  </div>


 

  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className='row px-5 mt-5'>
          <div className='col-md-4 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={okx} />

                  <h4 className='coinhead'>OKX</h4>


              </div>


          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={gate} />

                  <h4 className='coinhead'>Gate.io</h4>


              </div>
              

          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={huobi} />

                  <h4 className='coinhead'>Huobi</h4>


              </div>
              

          </div>



      </div>

      <div className='row px-5 mt-5'>
          <div className='col-md-4 coincontent'>
              <div className='spancontent'>
                  <img className='coinimage' src={bybit} />

                  <h4 className='coinhead'>Bybit</h4>


              </div>


          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={kucoin} />

                  <h4 className='coinhead'>Kucoin</h4>


              </div>
              

          </div>

          <div className='col-md-4 coincontent'>
          <div className='spancontent'>
                  <img className='coinimage' src={crypto} />

                  <h4 className='coinhead'>Crypto.com</h4>


              </div>
              

          </div>



      </div>
  

  </div>
</div>

            

    </div>

    </section>


    <section className='blog'>

        <h2 className='supportheading '>Stay updated with our blog</h2>

        <div className='blogmain mt-4'>

            <div className='blogdiv'>
                <a href='https://www.staderlabs.com/blogs/staking-basics/what-is-eth-solo-staking/'>
                <img  className='blogimage' src={blogone} />
                <h4 className='coinhead text-center'>What is Eth Solo Staking?</h4>

                <p className='heroparatwo text-center'>3 mins read / updated on Thu Oct 19 2023</p>
                </a>
            </div>

            <div className='blogdiv'>
                <a href='https://www.staderlabs.com/blogs/understanding-rseth-tech-explainer/'>
            <img  className='blogimage' src={blogtwo} />
                <h4 className='coinhead text-center'>Understanding rsETH | Tech Explainer</h4>

                <p className='heroparatwo text-center'>2 mins read / updated on Mon Sep 11 2023</p>
                </a>
            </div>

            <div className='blogdiv'>
                <a href='https://www.staderlabs.com/blogs/staking-basics/ethx-vs-solo-staking/'>
            <img  className='blogimage' src={blogthree} />
                <h4 className='coinhead text-center'>ETHx vs. Solo Staking: Which is better?</h4>

                <p className='heroparatwo text-center'>3 mins read / updated on Mon Oct 30 2023</p>
                </a>
            </div>



        </div>

        <div className='text-center mt-2 py-4'>

            <a href='https://www.staderlabs.com/blogs/' className='btn btn-outline-success text-dark px-4 py-2 font-weight-700 myconnect'>View More</a>

         

        </div>

    </section>




    <section className='faq mt-3'>

        <h2 className='supportheading '>Frequently asked questions</h2>


        <div class="accordion border-0 col-md-10 m-auto" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn  btn-block text-left faqtext" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Stader?
        </button>
      </h2>
    </div>
    <br/>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body faqpara">
      Stader is a non-custodial, smart contract-driven staking platform that facilitates easy discovery and utilization of staking solutions. It acts as an essential staking middleware infrastructure for various Proof-of-Stake (PoS) networks, catering to retail cryptocurrency users, exchanges, and custodians.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-block text-left collapsed faqtext" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is liquid staking?
        </button>
      </h2>
    </div>

    <br/>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body faqpara">
      Liquid staking is a mechanism within the decentralized finance (DeFi) space that allows users to stake their cryptocurrency to earn rewards while retaining liquidity of the staked assets. <br/>

Unlike traditional staking, where the staked funds are locked and inaccessible for a defined period, liquid staking provides a tokenized version of the staked assets. This means users can still buy, sell, trade, or use those assets, making them more flexible and convenient. <br/>

Liquid staking offers the dual benefit of better rewards through staking and the ability to continue utilizing the staked funds in other DeFi opportunities.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn  btn-block text-left collapsed faqtext" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What are the benefits of liquid staking?
        </button>
      </h2>
    </div>

    <br/>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body faqpara">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>


    </section>


    {/* footer section */}

    <section className='footer'>

        <div className='row'>

        <div className='col-md-4 col-sm-12'>
          

            <img className='footerlogo mb-3' src={footlogo} />

            <div className='flexdiv my-3'>
          <a href="https://twitter.com/staderlabs"><img className='topicon' src={twitter} /></a>
         <a href='https://discord.com/invite/xJURAhSmav'><img className='topicon' src={discord} /></a>
          <a  href='https://t.me/staderlabs'><img className='topicon' src={telegram} /></a>
         <a href='https://www.reddit.com/r/StaderLabs_Official/'> <img className='topicon' src={reddit} /></a>

      </div>

             

        </div>

        <div className='col-md-8'>

            <div className='row'>

            <div className='col-md-4 linkcol text-left'>
                <h3 className='linkhead mb-4'>Networks</h3>

           
                    <p className='footlist'>Ethereum</p>
                    <p className='footlist'>Polygon</p>
                    <p className='footlist'>Hedera</p>
                    <p className='footlist'>BNB</p>
                    <p className='footlist'>Fantom</p>
                    <p className='footlist'>Near</p>
                    <p className='footlist'>Terra 2.0</p>


            </div>

            <div className='col-md-4 linkcol'>
                <h3 className='linkhead mb-4'>Governance</h3>


           
                    <p className='footlist'><a href='https://forum.staderlabs.com'>Community Forum</a></p>
                    <p className='footlist'><a href='https://snapshot.org/#/staderdao.eth'>Snapshot</a></p>
                    <p className='footlist'><a href='https://www.staderlabs.com/sd/defi/'>SD DeFi</a></p>
                    <p className='footlist'><a href='https://staderlabs.notion.site/staderlabs/Introducing-SD-1160c9a4217d477eaafb963e21f90aba'>SD Details</a></p>
                    
            </div>

            <div className='col-md-4 linkcol'>
                <h3 className='linkhead mb-4'>Analytics</h3>

                


           
                    <p className='footlist'><a href='https://dune.com/stader_labs/dashboard-catalogue'>Dune Analytics</a></p>
                   
            </div>

            </div>

            <div className='row mt-4'>

            <div className='col-md-4 linkcol text-left'>
                <h3 className='linkhead mb-4'>Developers</h3>

           
                    <p className='footlist'><a href=''>Github</a></p>
                    <p className='footlist'><a href='https://www.staderlabs.com/docs/ETHx%20Litepaper.pdf'>ETHx Litepaper</a></p>
                    <p className='footlist'><a href='https://www.staderlabs.com/docs/'>Docs</a></p>
                    


            </div>

            <div className='col-md-4 linkcol'>
                <h3 className='linkhead mb-4'>About</h3>


           
                    <p className='footlist'><a href='https://www.staderlabs.com/about-stader/'>About Stader</a></p>
                    <p className='footlist'><a href='https://www.staderlabs.com/blogs/'>Blog</a></p>
                    <p className='footlist'><a href='https://www.staderlabs.com/Stader_press_kit.zip'>Download Press Kit</a></p>
                
                    
            </div>

            <div className='col-md-4 linkcol'>
                   
                   
            </div>

            </div>

        </div>

       

       <div className='footerfooter'>
           <p className='foottextt'>© Copyright 2023 Stader. All rights reserved.</p>
           <p className='foottextt'>Terms of service | Privacy policy</p>
       </div>

       </div>

    </section>

        </>
    );
}

export default Home;