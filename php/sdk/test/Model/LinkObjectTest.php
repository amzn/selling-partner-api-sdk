<?php
/**
 * LinkObjectTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\messaging\LinkObject;

/**
 * LinkObjectTest Class Doc Comment
 *
 * @category    Class
 * @description A Link object.
 * @package     OpenAPI\Client
 */
class LinkObjectTest extends TestCase
{

    private LinkObject $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LinkObject();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LinkObject"
     */
    public function testLinkObject()
    {
        $this->assertInstanceOf(LinkObject::class, $this->model);
    }

    /**
     * Test attribute "href"
     */
    public function testPropertyHref()
    {
        $testValue = 'test';
        
        $this->model->setHref($testValue);
        $this->assertEquals($testValue, $this->model->getHref());
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }
}
