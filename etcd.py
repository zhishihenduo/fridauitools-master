import etcd3

if __name__ == '__main__':
    print("hello etcd")
    # 往etcd中存数据
    client = etcd3.client(host='192.168.133.140')  # 连接etcd
    r = client.put('aaa', 'qweqwe')  # 往etcd中存键值
    b = client.get('aaa')  # 查看etcd中的键值
    vents_iterator, cancel = client.watch('aaa')  # 监听etcd中aaa键 是否发生改变，
