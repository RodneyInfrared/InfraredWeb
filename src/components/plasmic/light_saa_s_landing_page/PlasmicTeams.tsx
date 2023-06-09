// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tk14VmZD6JAcm2qRqNW5xk
// Component: IbaOuCt2R_Vsfc

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_light_saa_s_landing_page.module.css"; // plasmic-import: tk14VmZD6JAcm2qRqNW5xk/projectcss
import sty from "./PlasmicTeams.module.css"; // plasmic-import: IbaOuCt2R_Vsfc/css

import teampngGHoYajVLyAgml3 from "./images/teampng.png"; // plasmic-import: gHOYajVLyAgml3/picture

export type PlasmicTeams__VariantMembers = {};
export type PlasmicTeams__VariantsArgs = {};
type VariantPropType = keyof PlasmicTeams__VariantsArgs;
export const PlasmicTeams__VariantProps = new Array<VariantPropType>();

export type PlasmicTeams__ArgsType = {};
type ArgPropType = keyof PlasmicTeams__ArgsType;
export const PlasmicTeams__ArgProps = new Array<ArgPropType>();

export type PlasmicTeams__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultTeamsProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicTeams__RenderFunc(props: {
  variants: PlasmicTeams__VariantsArgs;
  args: PlasmicTeams__ArgsType;
  overrides: PlasmicTeams__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto" as const}
          displayMaxHeight={"64px" as const}
          displayMaxWidth={"64px" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={{
            src: teampngGHoYajVLyAgml3,
            fullWidth: 128,
            fullHeight: 128,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wsFm
          )}
        >
          {"Jocylne Kujo"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__spUkU
          )}
        >
          {"Founder Flappin"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__tftGi
          )}
        >
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
          }
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeams__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeams__VariantsArgs;
    args?: PlasmicTeams__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeams__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeams__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTeams__ArgProps,
          internalVariantPropNames: PlasmicTeams__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeams__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeams";
  } else {
    func.displayName = `PlasmicTeams.${nodeName}`;
  }
  return func;
}

export const PlasmicTeams = Object.assign(
  // Top-level PlasmicTeams renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicTeams
    internalVariantProps: PlasmicTeams__VariantProps,
    internalArgProps: PlasmicTeams__ArgProps
  }
);

export default PlasmicTeams;
/* prettier-ignore-end */
