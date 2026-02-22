export interface BaseTypes {
  readonly title: string;
  readonly url: string | null | undefined;
  readonly label: string;
}

export interface SocialTypes extends Platform {
  readonly title: string;
  readonly url: null | string;
  readonly label: string;
}

export interface ProjectTypes {
  id: number;
  slug: string;
  title: string;
  description: string;
  logomark: string;
  picture: string;
  site_url: string | null | undefined;
  repo_url: string;
  page_name: string;
  page_description: string;
  background: string;
  status: "done" | "in_progress";
}

export interface ProjectActions extends Platform {
  url: string | null;
  label: string;
}

export type Platform = {
  tooltip: string;
  color: string;
  icon?: IconName;
};

export type ProjectNavegation = Pick<ProjectTypes, "slug" | "title">;

export type IconName =
  | "arrow-down"
  | "arrow-up-right-from-square"
  | "arrow-up-right"
  | "github"
  | "hamburger"
  | "vector"
  | "donut";
