import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
function RepoItem({ repo }) {
    const { name, description, watchers_count, stargazers_count, forks_count, open_issues_count } = repo;
    return (
        <div className="w-full bg-neutral card card-compact card-bordered">
            <div className="card-body gap-3">
                <h2 className="card-title">
                    <FaLink className="inline mr-2" />
                    {name}
                </h2>
                {/* <p>{description}</p> */}
                <div className="flex justify-start gap-2">
                    <div className="badge badge-info badge-sm">
                        <FaEye className="mr-2" />
                        {watchers_count}
                    </div>
                    <div className="badge badge-success badge-sm">
                        <FaStar className="mr-2" />
                        {stargazers_count}
                    </div>
                    <div className="badge badge-error badge-sm">
                        <FaInfo className="mr-2" />
                        {open_issues_count}
                    </div>
                    <div className="badge badge-warning badge-sm">
                        <FaUtensils className="mr-2" />
                        {forks_count}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RepoItem;


