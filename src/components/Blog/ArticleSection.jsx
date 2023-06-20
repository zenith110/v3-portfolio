import Grid from '@mui/material/Grid';
import ArticleCard from './ArticleCard';
import "./ArticleSection.css"

const ArticleSection = ({ articles }) => {
        return(
        <div >
          {articles.length > 0 ?
           <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
            
            {articles.map((articleData) =>(
              <Grid item xs={3} key={articleData.uuid}>
              <ArticleCard article={articleData} key={articleData.uuid} className="ArticleCard"/>
              </Grid>
            ))}
          </Grid> : <></>}
          </div>
    )
}
export default ArticleSection