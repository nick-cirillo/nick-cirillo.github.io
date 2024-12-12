'use client';

import "./style.css";
import Head from "next/head";

export default function Page() {
    return (
        <>
        <div className="back-button-container">
            <a id="back-button" href="./about/ifttt-applet" className="back-button">&#x2190;</a>
        </div>
        <div className="body">
            <div class="problem">
                <img class="mcd" src="/ifttt-applet/mcd.png" alt="A person sitting alone in a McDonald's restaurant, 
                eating a burger and fries. They appear sad, with a slouched posture and a distant gaze, 
                wearing a casual hoodie and jeans. The setting features McDonald's signature red and yellow decor, 
                bright fluorescent lighting, and a partially eaten meal on the table. 
                The atmosphere feels quiet and empty, contrasting with the typically lively 
                environment of the fast-food chain." />
                <div class="mcds-text">
                    <div class="you">Is this you?</div>
                    <div class="you">All alone at McDonald&apos;s with nobody to share fries with?</div>
                </div>
            </div>
            <div class="applet">
                <div class="applet-text">We have just the applet for you!</div>
                <div class="applet-images">
                    <a class="applet-image" href="https://ifttt.com/applets/YaNmryuY-when-you-enter-an-mcdonalds-send-a-slack-message-telling-them-to-come-hang-out-with-you" target="_blank" rel="noopener noreferrer">
                        <img src="/ifttt-applet/applet.jpeg" alt="A screenshot of an if-this-than-that applet, which sends a Slack message to your friends or coworkers whenever you enter McDonald's."/>
                    </a>
                    <img class="applet-image" src="/ifttt-applet/PLACEHOLDER.PNG" alt="A screenshot of Slack messages between two friends demonstrating the applet's functionality."/>
                </div>
                <div class="applet-description">With this applet, you can set location of your nearest McDonald&apos;s - so whenever you enter, your friends will be notified to come hang out. Never eat a Big Mac alone again!</div>
            </div>
            <div class="connect">
                <div class="connect-text">Try it out below!</div>
                <a href="https://ifttt.com/applets/YaNmryuY-when-you-enter-an-mcdonalds-send-a-slack-message-telling-them-to-come-hang-out-with-you" target="_blank" rel="noopener noreferrer">
                    <img class="connect-slider" src="/ifttt-applet/connect-slider.png" alt="A button that says 'connect.'"/>
                </a>
            </div>
        </div>
        </>

    );
}