import Binding from '@/binding';
import BaseBound, { IBindingStorage } from '@/bound/base';

export type IProxyBindingStorage<T extends object> = {
  [key in keyof T]: T[key] extends object ? IProxyBindingStorage<T[key]> : Extract<ProxyHandler<T>, IBindingStorage<T>[key]>;
};

export class ProxyBound<T extends object> extends BaseBound<T> {
  protected storage: IProxyBindingStorage<T> = {} as any;
}
