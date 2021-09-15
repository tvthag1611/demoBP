import Icon from '@ant-design/icons/lib/components/Icon'
import React from 'react'
import rocket from '../../assets/images/rocket.png'
import { icon } from '../../assets/Svgs'
import './whitepage.scss'

export default function Whitepage() {
    return (
        <div className='whitepage'>
            <h1>BitPlay</h1>
            <p className="whitepage-intro">Official BitPlay Whitepage, last update December 2021</p>
            <hr />
            <img src={rocket} alt="rocket" />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet, euismod tempor, metus, amet. Risus,
            tristique amet lobortis vitae morbi tincidunt sollicitudin. Quisque bibendum quis congue consectetur ut scelerisque.
            Nisi et in eget eget lorem. Posuere rutrum nam iaculis lacinia sem fringilla quam vel. 
            <br/>
            <br/>
            Donec tortor id interdum non, tempus lectus. Nec volutpat lacinia eget nibh ultrices quam risus nunc, donec.
            Ultricies sed interdum nisi, cras urna et hendrerit scelerisque aliquam. 
            <br/>
            <br/>
            Odio lacus, adipiscing maecenas varius dolor ac sed facilisis semper.
            Commodo porttitor luctus libero praesent nibh lectus non. Vulputate quis placerat neque a, fermentum tristique.
            Lorem a pellentesque dictumst arcu ut tellus egestas duis. Scelerisque diam nunc odio elit.
            At quis consectetur tortor pellentesque sed commodo in velit.
            <br/>
            <br/>
            Posuere sed lacus quis in augue. Phasellus dolor ornare lorem pellentesque amet.
            Facilisis faucibus ultrices risus sit est urna, est, diam libero. Vitae netus sed ultrices magna in facilisi.
            Sed mauris varius donec egestas non est at porta. Bibendum vivamus erat fermentum ligula. Amet non porttitor viverra sed arcu ultrices sapien, cum.
            Et tellus ut habitasse at porta. Faucibus vel dolor netus nullam nisl mattis sit.
            Nulla parturient et nulla vitae faucibus lectus egestas tellus cursus. Vivamus mauris netus volutpat egestas. 
            <br/>
            <br/>
            Potenti mattis aliquam nibh nam scelerisque. Erat porta scelerisque malesuada tincidunt hendrerit risus semper quis.
            Iaculis elit venenatis nunc ac sed scelerisque. Pellentesque sed a, maecenas lobortis nulla aenean tincidunt.
            <br/>
            <br/>
            Posuere sed lacus quis in augue. Phasellus dolor ornare lorem pellentesque amet.
            Facilisis faucibus ultrices risus sit est urna, est, diam libero. Vitae netus sed ultrices magna in facilisi.
            Sed mauris varius donec egestas non est at porta. Bibendum vivamus erat fermentum ligula. Amet non porttitor viverra sed arcu ultrices sapien, cum.
            Et tellus ut habitasse at porta. Faucibus vel dolor netus nullam nisl mattis sit.
            Nulla parturient et nulla vitae faucibus lectus egestas tellus cursus. Vivamus mauris netus volutpat egestas. Posuere sed lacus quis in augue.
            Phasellus dolor ornare lorem pellentesque amet. Facilisis faucibus ultrices risus sit est urna, est, diam libero.
            Vitae netus sed ultrices magna in facilisi. Sed mauris varius donec egestas non est at porta. Bibendum vivamus erat fermentum ligula.
            Amet non porttitor viverra sed arcu ultrices sapien, cum.
            Et tellus ut habitasse at porta. Faucibus vel dolor netus nullam nisl mattis sit.
            Nulla parturient et nulla vitae faucibus lectus egestas tellus cursus. Vivamus mauris netus volutpat egestas. 
            </p>
            <div className='whitepage-link'>
                <div className="whitepage-previous">
                    <Icon component={icon.left} />
                    <div>
                        <p>Previous</p>
                        <h5>Gameplay</h5>
                    </div>
                </div>
                <div className="whitepage-next">
                    <div>
                        <p>Previous</p>
                        <h5>Gameplay</h5>
                    </div>
                    <Icon component={icon.right} />
                </div>
            </div>
        </div>
    )
}
