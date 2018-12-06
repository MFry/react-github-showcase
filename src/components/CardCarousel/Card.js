/* eslint-disable camelcase */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Star from '@material-ui/icons/Star';
import { Link } from 'components/A';
import IssueIcon from 'components/IssueIcon';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  card: {
    maxWidth: 400,
    height: '228px',
    pading: 8,
  },
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    flexGrow: 1,
  },
  title: {
    fontSize: '1.1rem',
  },
  actions: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

type Repo = {
  classes: { card: {}, title: {}, media: {}, actions: {}, avatar: {} },
  name: string,
  language: string,
  description: string,
  html_url: string,
  created_at: Date,
  stargazers_count: number,
  open_issues_count: number,
};

/**
 * This is not in its own file due to rendering issues of react-slick
 * To recreate the issue try removing the lines 124-130 and simply importing RepoStats
 * This is the same issue that forces us to wrap div around each card in CardCarousel
 */
const Wrapper = styled.div`
  display: flex;
`;

const StatWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Spacer = styled.span`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const SpacerLeft = styled.span`
  padding-left: 0.25rem;
`;

const RepoCard = ({
  classes,
  name,
  language = '',
  description,
  html_url,
  created_at,
  stargazers_count = 0,
  open_issues_count = 0,
}: Repo) => {
  let avatarImg = '';
  // eslint-disable-next-line no-param-reassign
  language = language || '';
  switch (language.toLowerCase()) {
    case 'javascript':
    case 'js':
      avatarImg = <i className="fab fa-js-square" />;
      break;
    case '':
      avatarImg = <i className="fas fa-file-alt" />;
      break;
    default:
      avatarImg = <i className="fas fa-code" />;
  }

  return (
    <Card className={classes.card}>
      <Paper className={classes.paper} elevation={24}>
        <CardHeader
          avatar={
            <Avatar aria-label="project" className={classes.avatar}>
              {avatarImg}
            </Avatar>
          }
          classes={{ title: classes.title }}
          title={name}
          subheader={moment({ created_at }).format('MM/DD/YYYY')}
        />
        <CardContent className={classes.body}>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Link href={html_url}>
            <Button size="small">Learn More</Button>
          </Link>
          <Wrapper>
            <StatWrapper>
              <Star /> {stargazers_count}
              <Spacer />
              <IssueIcon /> <SpacerLeft>{open_issues_count}</SpacerLeft>
            </StatWrapper>
          </Wrapper>
        </CardActions>
      </Paper>
    </Card>
  );
};

export default withStyles(styles)(RepoCard);
