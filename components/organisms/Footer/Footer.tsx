import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.SectionFooter}>
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<h4>Copyright 2016 - Evil Matchers</h4>

					<ul className={`${styles.SocialLinks} list-inline`}>
						<li><a href="http://www.facebook.com/EvilMatchers" target="_blank"><i className="fa fa-facebook"></i></a></li>
						<li><a href="https://itunes.apple.com/artist/evil-matchers/id1107060934" target="_blank"><i className="fa fa-apple"></i></a></li>
						<li><a href="https://open.spotify.com/artist/5H4E47K5GUvlampkIg00rq" target="_blank"><i className="fa fa-spotify"></i></a></li>
						<li><a href="http://evilmatchers.bandcamp.com/" target="_blank"><i className="fa fa-music"></i></a></li>
						<li><a href="https://plus.google.com/+Evilmatchers/" target="_blank"><i className="fa fa-google-plus"></i></a></li>
						<li><a href="http://www.youtube.com/user/evilmatchers" target="_blank"><i className="fa fa-youtube"></i></a></li>
						<li><a href="http://www.last.fm/pt/music/Evil+Matchers" target="_blank"><i className="fa fa-lastfm"></i></a></li>
						<li><a href="https://soundcloud.com/evilmatchers" target="_blank"><i className="fa fa-soundcloud"></i></a></li>
						<li><a href="http://tnb.art.br/rede/evilmatchers" target="_blank"><i className="fa fa-volume-up"></i></a></li>
						<li><a href="https://twitter.com/evilmatchers" target="_blank"><i className="fa fa-twitter"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
