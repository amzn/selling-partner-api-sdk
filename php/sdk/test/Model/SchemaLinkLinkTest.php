<?php
/**
 * SchemaLinkLinkTest
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
use SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLinkLink;

/**
 * SchemaLinkLinkTest Class Doc Comment
 *
 * @category    Class
 * @description Link to retrieve the schema.
 * @package     SpApi
 */
class SchemaLinkLinkTest extends TestCase
{

    private SchemaLinkLink $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SchemaLinkLink();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SchemaLinkLink"
     */
    public function testSchemaLinkLink()
    {
        $this->assertInstanceOf(SchemaLinkLink::class, $this->model);
    }

    /**
     * Test attribute "resource"
     */
    public function testPropertyResource()
    {
        $testValue = 'test';
        
        $this->model->setResource($testValue);
        $this->assertEquals($testValue, $this->model->getResource());
    }

    /**
     * Test attribute "verb"
     */
    public function testPropertyVerb()
    {
        $enumInstance = new SchemaLinkLink();
        $allowedValues = $enumInstance->getVerbAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setVerb($testValue);
        $this->assertEquals($testValue, $this->model->getVerb());
    }
}
