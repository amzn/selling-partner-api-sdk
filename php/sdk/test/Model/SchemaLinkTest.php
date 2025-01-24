<?php
/**
 * SchemaLinkTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\productTypeDefinitions\SchemaLink;

/**
 * SchemaLinkTest Class Doc Comment
 *
 * @category    Class
 * @description SchemaLink
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\productTypeDefinitions\SchemaLinkLink();
        
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
