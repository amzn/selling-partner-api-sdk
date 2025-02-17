<?php
/**
 * CreateDestinationRequestTest
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
use SpApi\Model\notifications\v1\CreateDestinationRequest;

/**
 * CreateDestinationRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the &#x60;createDestination&#x60; operation.
 * @package     SpApi
 */
class CreateDestinationRequestTest extends TestCase
{

    private CreateDestinationRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateDestinationRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateDestinationRequest"
     */
    public function testCreateDestinationRequest()
    {
        $this->assertInstanceOf(CreateDestinationRequest::class, $this->model);
    }

    /**
     * Test attribute "resource_specification"
     */
    public function testPropertyResourceSpecification()
    {
        
        $testValue = new \SpApi\Model\notifications\v1\DestinationResourceSpecification();
        
        $this->model->setResourceSpecification($testValue);
        $this->assertEquals($testValue, $this->model->getResourceSpecification());
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
