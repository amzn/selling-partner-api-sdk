<?php
/**
 * DeleteDestinationResponseTest
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
use SpApi\Model\notifications\v1\DeleteDestinationResponse;

/**
 * DeleteDestinationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;deleteDestination&#x60; operation.
 * @package     SpApi
 */
class DeleteDestinationResponseTest extends TestCase
{

    private DeleteDestinationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeleteDestinationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeleteDestinationResponse"
     */
    public function testDeleteDestinationResponse()
    {
        $this->assertInstanceOf(DeleteDestinationResponse::class, $this->model);
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
