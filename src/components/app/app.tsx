import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './../../constants/articleProps';

import styles from './app.module.scss';

export const App = () => {
	const [parametrs, setParametrs] =
		useState<ArticleStateType>(defaultArticleState);
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': parametrs.fontFamilyOption.value,
					'--font-size': parametrs.fontSizeOption.value,
					'--font-color': parametrs.fontColor.value,
					'--container-width': parametrs.contentWidth.value,
					'--bg-color': parametrs.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				onApply={setParametrs}
				onReset={() => setParametrs(defaultArticleState)}
			/>
			<Article />
		</main>
	);
};
