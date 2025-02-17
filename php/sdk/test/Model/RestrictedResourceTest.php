<?php
/**
 * RestrictedResourceTest
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
use SpApi\Model\tokens\v2021_03_01\RestrictedResource;

/**
 * RestrictedResourceTest Class Doc Comment
 *
 * @category    Class
 * @description Model of a restricted resource.
 * @package     SpApi
 */
class RestrictedResourceTest extends TestCase
{

    private RestrictedResource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RestrictedResource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RestrictedResource"
     */
    public function testRestrictedResource()
    {
        $this->assertInstanceOf(RestrictedResource::class, $this->model);
    }

    /**
     * Test attribute "method"
     */
    public function testPropertyMethod()
    {
        $enumInstance = new RestrictedResource();
        $allowedValues = $enumInstance->getMethodAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setMethod($testValue);
        $this->assertEquals($testValue, $this->model->getMethod());
    }

    /**
     * Test attribute "path"
     */
    public function testPropertyPath()
    {
        $testValue = 'test';
        
        $this->model->setPath($testValue);
        $this->assertEquals($testValue, $this->model->getPath());
    }

    /**
     * Test attribute "data_elements"
     */
    public function testPropertyDataElements()
    {
        $testValue = [];
        
        $this->model->setDataElements($testValue);
        $this->assertEquals($testValue, $this->model->getDataElements());
    }
}
