CREATE OR REPLACE FUNCTION count_blog_tag()
    RETURNS BIGINT
    AS $$
    DECLARE
        value_count BIGINT;
    BEGIN
        SELECT COUNT(id) INTO value_count FROM blog_tag;

        RETURN value_count;
    END;
    $$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_blog_tag(
        input_name TEXT
    )
    RETURNS UUID
    AS $$
    DECLARE
        return_id UUID;
    BEGIN
        INSERT INTO blog_tag (name)
        VALUES (input_name)
        RETURNING id INTO return_id;

        RETURN return_id;
    END;
    $$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_blog_tag(
        input_id   UUID,
        input_name TEXT
    )
    RETURNS TABLE (
        id   UUID,
        name TEXT
    )
    AS $$
    DECLARE
        return_id UUID;
    BEGIN
        UPDATE blog_tag
        SET name=input_name
        WHERE blog_tag.id = input_id;

        RETURN QUERY
            SELECT blog_tag.id, blog_tag.name FROM blog_tag
            WHERE blog_tag.id = input_id;
    END;
    $$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION remove_blog_tag(
        input_id UUID
    )
    RETURNS UUID
    AS $$
    DECLARE
        return_id UUID;
    BEGIN
        DELETE FROM blog_tag
        WHERE id=input_id
        RETURNING id INTO return_id;

        RETURN return_id;
    END;
    $$ LANGUAGE plpgsql;