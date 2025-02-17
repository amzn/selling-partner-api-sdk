<?php
/**
 * SchemaLinkTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink;

/**
 * SchemaLinkTest Class Doc Comment
 *
 * @category    Class
 * @description SchemaLink
 * @package     SpApi
 */
class SchemaLinkTest extends TestCase
{

    private SchemaLink $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SchemaLink();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SchemaLink"
     */
    public function testSchemaLink()
    {
        $this->assertInstanceOf(SchemaLink::class, $this->model);
    }

    /**
     * Test attribute "link"
     */
    public function testPropertyLink()
    {
        
        $testValue = new \SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLinkLink();
        
        $this->model->setLink($testValue);
        $this->assertEquals($testValue, $this->model->getLink());
    }

    /**
     * Test attribute "checksum"
     */
    public function testPropertyChecksum()
    {
        $testValue = 'test';
        
        $this->model->setChecksum($testValue);
        $this->assertEquals($testValue, $this->model->getChecksum());
    }
}
