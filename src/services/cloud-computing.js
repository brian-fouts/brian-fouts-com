function CloudCategory(props) {
    return (
        <div className="m-2 text-center">
            <h4><b>{props.children}</b></h4>
        </div>
    )
}
function CloudServices(props) {
    return (
        <div className="text-center">
            <ul className="flex break-normal" {...props}>{props.children}</ul>
        </div>
    )
}

function CloudService(props) {
    return (
        <li className="p-2">{props.children}</li>

    )
}

function Cloud(props) {
    return (
        <div {...props} className="float-left w-2/5 p-4 m-4 border-2 shadow-xl">
            {props.children}
        </div>
    )
}

function CloudName(props) {
    return (
        <div className="m-2">
            <h3><b>{props.children}</b></h3>
        </div>
    )
}

export default function CloudComputingServices() {
    return (
        <div className="m-8">
            <div className="m-4 text-center">
                <h2><b>Cloud Computing</b></h2>
            </div>
            <div className="text-left">
                The cloud is more than just someone else's computer - 
                it's a whole network of tools and services to deliver 
                your product reliably as the needs and features change. 
                I have extensive experience working in cloud environments 
                that I can leverage to ensure that your service operates 
                as best in class.
            </div>
            <div id="clouds" className="p-2">
                <Cloud id="aws">
                    <CloudName>AWS</CloudName>
                    <CloudCategory>Compute</CloudCategory>
                    <CloudServices>
                        <CloudService>Load Balancing</CloudService>
                        <CloudService>Lambda</CloudService>
                    </CloudServices>
                    <CloudServices>
                        <CloudService>Autoscaling</CloudService>
                        <CloudService>ECS</CloudService>
                        <CloudService>EC2</CloudService>
                    </CloudServices>
                    <CloudCategory>Monitoring/Alerting</CloudCategory>
                    <CloudServices>
                        <CloudService>Cloudwatch</CloudService>
                        <CloudService>Cloud Trail</CloudService>
                    </CloudServices>
                    <CloudCategory>Databases</CloudCategory>
                    <CloudServices>
                        <CloudService>Aurora</CloudService>
                        <CloudService>RDS</CloudService>
                        <CloudService>Redshift</CloudService>
                    </CloudServices>
                    <CloudCategory>Content Delivery</CloudCategory>
                    <CloudServices>
                        <CloudService>Elastic Transcoder</CloudService>
                        <CloudService>S3</CloudService>
                    </CloudServices>
                    <CloudServices>
                        <CloudService>Cloudfront</CloudService>
                        <CloudService>API Gateway</CloudService>
                        <CloudService></CloudService>
                    </CloudServices>
                    <CloudCategory>Security/Networking</CloudCategory>
                    <CloudServices>
                        <CloudService>Route 53</CloudService>
                        <CloudService>KMS</CloudService>
                        <CloudService>VPC</CloudService>
                        <CloudService>IAM</CloudService>
                    </CloudServices>
                </Cloud>
                <Cloud id="gcp">
                    <CloudName>GCP</CloudName>
                    <CloudCategory>Compute</CloudCategory>
                    <CloudServices>
                        <CloudService>Compute Engine</CloudService>
                    </CloudServices>
                    <CloudServices>
                        <CloudService>Dataflow</CloudService>
                        <CloudService>Cloudrun</CloudService>
                    </CloudServices>
                    <CloudServices>
                        <CloudService>App Engine</CloudService>
                        <CloudService>Kubernetes</CloudService>
                    </CloudServices>
                    <CloudCategory>Databases</CloudCategory>
                    <CloudServices>
                        <CloudService>Big Query</CloudService>
                        <CloudService>Postgres</CloudService>
                    </CloudServices>
                    <CloudServices>
                        <CloudService>Firestore</CloudService>
                    </CloudServices>
                    <CloudCategory>Content Delivery</CloudCategory>
                    <CloudServices>
                        <CloudService>Cloud Storage</CloudService>
                        <CloudService>Pub/Sub</CloudService>
                    </CloudServices>
                    <CloudCategory>Security/Networking</CloudCategory>
                    <CloudServices>
                        <CloudService>IAM</CloudService>
                    </CloudServices>
                </Cloud>
                <div className="clear-both"></div>
            </div>
        </div>
    )
}