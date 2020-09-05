import React from 'react';
import "./style.css"
import HomeFeatDescriptions from "../HomeFeatDescriptions";
import oilChangeIcon from "../../../images/home/oil-change.svg";
import warrantyIcon from "../../../images/home/warranty.svg";
import recallIcon from "../../../images/home/recall.svg";


function HomeFeatureBlock() {
    return (
        <section className="g__deep-blue--bg">
            <div className="container home-feat__block" id="featBlock">
                <div className="home-feat__roof-txt">
                    <h4>The Ultimate</h4>
                </div>

                <h2 className="home-feat__title">Car Maintenance Tracker</h2>

                <div className="home-feat__descriptions d-lg-flex">
                    <HomeFeatDescriptions
                        icon={oilChangeIcon}
                        alt={"Canister of oil icon"}
                        subhead={"Oil Change"}
                        text={"Keep your engine healthy and never miss another oil change! We track how many miles are left until you need to bring your car in."}
                    />
                    <HomeFeatDescriptions
                        icon={warrantyIcon}
                        alt={"Checkmark icon"}
                        subhead={"Warranty"}
                        text={"Store important warranty information for all of your car parts. If something breaks you will be able to save with no hassle."}
                    />
                    <HomeFeatDescriptions
                        icon={recallIcon}
                        alt={"Warning sign icon"}
                        subhead={"Recall"}
                        text={"Stay informed of life saving information about your car. Recall information get’s automaticly updated in your dashboard. "}
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeFeatureBlock;