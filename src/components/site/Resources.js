import React from 'react';

const Resources = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Chiari Resources</h1>
                <p>Below are some useful resources for those wanting to learn more or find support!</p>
                    <ul>
                        <li>
                            <a href="https://www.conquerchiari.org/" target="_blank">
                                Conquer Chiari ; the largest private funder of Chiari research.
                            </a>
                        </li>
                        <li>
                            <a href="https://asap.org/" target="_blank">
                           ASAP ; a non-profit organization full of information and support.
                            </a>
                        </li>
                        <li><a href="https://rarediseases.org/rare-diseases/chiari-malformations/" target="_blank">
                            NORD ; Chiari Malformation.
                            </a>
                            </li>
                            <li>
                                <a href="https://www.mayoclinic.org/diseases-conditions/chiari-malformation/symptoms-causes/syc-20354010" target="_blank">
                                    Mayo Clinic ; Chiari Malformation.
                                </a>
                            </li>
                            <li>
                                <a href="https://www.chiarigear.com/" target="_blank">
                                    Chiari Gear ; Buy awareness clothing and material!
                                </a>
                            </li>
                    </ul>
            </div>
        </div>
    );
}

export default Resources;