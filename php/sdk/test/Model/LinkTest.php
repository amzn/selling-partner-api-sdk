<?php
/**
 * LinkTest
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
use SpApi\Model\listings\restrictions\v2021_08_01\Link;

/**
 * LinkTest Class Doc Comment
 *
 * @category    Class
 * @description A link to resources related to a listing restriction.
 * @package     SpApi
 */
class LinkTest extends TestCase
{

    private Link $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Link();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Link"
     */
    public function testLink()
    {
        $this->assertInstanceOf(Link::class, $this->model);
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
        $enumInstance = new Link();
        $allowedValues = $enumInstance->getVerbAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setVerb($testValue);
        $this->assertEquals($testValue, $this->model->getVerb());
    }

    /**
     * Test attribute "title"
     */
    public function testPropertyTitle()
    {
        $testValue = 'test';
        
        $this->model->setTitle($testValue);
        $this->assertEquals($testValue, $this->model->getTitle());
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $testValue = 'test';
        
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }
}
