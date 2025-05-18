import { Col} from 'react-bootstrap'
const BenefitsReusable = ({iconss}) => {
    return (
        <Col lg={{ span: 4 }}>
            <div className='orboxbenef'>
                <div className="icccs">
                    {iconss}
                </div>
                <div className="hpBenefits">
                    <h3>Customize with ease</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
            </div>
        </Col>
    )
}

export default BenefitsReusable