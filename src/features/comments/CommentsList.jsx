import { Col } from "reactstrap";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { selectCommentsByCampsiteId } from "./commentsSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const CommentsList = ({ campsiteId }) => {
	const { comments, isLoading, errMsg } = useSelector(
		selectCommentsByCampsiteId(campsiteId)
	);
	console.log(comments, "comments");

	if (comments && comments.length > 0) {
		return (
			<>
				<Col md="5" className="m-1">
					<h4>Comments</h4>
					{comments.map((comment, idx) => {
						if (isLoading) {
							return <Loading key={idx} />;
						}
						if (errMsg) {
							return <Error errMsg={errMsg} key={idx} />;
						}
						return <Comment key={comment.id} comment={comment} />;
					})}
					<CommentForm campsiteId={campsiteId} />
				</Col>
			</>
		);
	}
	return (
		<Col md="5" className="m-1">
			There are no comments for this campsite yet.
		</Col>
	);
};

export default CommentsList;
