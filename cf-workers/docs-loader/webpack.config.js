// cf-workers/docs-loader/webpack.config.js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: './src/index.ts',
	output: {
		filename: 'worker.js',
		path: path.join(__dirname, 'dist'),
	},
	mode: 'production',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@shared': path.resolve(__dirname, '../shared/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
			},
		],
	},
};
