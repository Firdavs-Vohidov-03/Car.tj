<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'car' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')a=uBGE?[Iy_g{o2}s;VrP!j#l0|K$LaJZ$hsMns~{}K}oMH9f=:EybB:~qIw 9h' );
define( 'SECURE_AUTH_KEY',  'j!d..E[D_~6s;V$Fu}8:/(7<j0$KCT*uCW[kh9_ W%VdJ?Mt&m?IAiD?oxTki6uC' );
define( 'LOGGED_IN_KEY',    '{{G9M{k}9VQe6kNdR%rS4}7~/duy{ez=21DkhgJ9J1p]o[z5m}2jskdW$r;8O@Nz' );
define( 'NONCE_KEY',        '7zXAD_j#:-tACjq-D$4*eh6.qge1zfn*FOY:R%Q/>/YzwU_KG2+P{LDTB]bVa%O!' );
define( 'AUTH_SALT',        'oi,H~5&)TOB^lToP8i7{HXZuKj!T^hiVps|D!nsh}vg[iI!t!~,i_yvX)A[Msw<B' );
define( 'SECURE_AUTH_SALT', 'f+H3rua{B`?<_mjVUR=rFF)HL$=*uI(jqbwmoD!v0]v=FvC/!w.PVN*{XJ j:6:,' );
define( 'LOGGED_IN_SALT',   '&d%/wsqJ[,xi~p7Q~{o6K#5jO{Z!{CQ)?Bt|.O>ZEJ*sQJ%b}4AeN.]t|/MI%1[F' );
define( 'NONCE_SALT',       '=Y,;HwFZ/T_?<5H&#*NXP.PTHvoBrxRRheD/(.l>Bb,E<i2<tl5[P+#5cG{@kQ+6' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
