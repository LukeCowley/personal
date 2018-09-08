import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}>{
    public render() {
        return <div className='layout'>
            <div className='container content-container'>
                <header>
                    <div className='bg-color-one'>
                    </div>
                    <div className='bg-color-two'>
                    </div>
                </header>
                <article className='content-body'>
                    <section className='row'>
                        <div className='col-md-4'>
                            <img className='profile-image' src="https://s3.eu-central-1.amazonaws.com/artistarea.gallereplay.com/production/user_67/picture_1909201694532.jpg" />
                        </div>
                        <div className='col-md-6 offset-md-2 title-container'>
                            <h1 className='title bg-color-two'>
                                Luke Cowley
                                <span className='social-icons'>
                                    <i className='fa fa-linkedin text-color-three'></i>
                                    <i className='fa fa-github'></i>
                                    <i className='fa fa-envelope'></i>
                                </span>

                            </h1>
                            <h3 className='sub-title text-color-three'>Full stack .NET Developer</h3>
                        </div>
                    </section>
                    <div className='row'>
                        <aside className='col-md-4'>
                            <section className='sticker'>
                                <h3>About Me</h3>
                                <p>Lorem ipsum dolor sit amet, usu eros nobis perpetua no, pri at erat diceret intellegat, eam id viris detraxit. Mei no case eloquentiam. Ius omnes aperiam appellantur ad. Pri in nihil adipisci, animal phaedrum signiferumque sit cu.</p>
                                <p>Sit vide timeam et, an aeque paulo qui. Cu case iusto insolens per. Nec fabulas detraxit sententiae no, ne impedit postulant dissentias cum.</p>
                            </section>
                        </aside>
                    </div>
                </article>
                <footer>
                    <div className='bg-color-two'>
                    </div>
                    <div className='bg-color-one'></div>
                </footer>
            </div>
            <div className='container splashback'>
            </div>
        </div>;
    }
}
