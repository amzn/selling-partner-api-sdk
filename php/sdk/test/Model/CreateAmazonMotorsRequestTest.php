<?php
/**
 * CreateAmazonMotorsRequestTest
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
use OpenAPI\Client\Model\messaging\v1\CreateAmazonMotorsRequest;

/**
 * CreateAmazonMotorsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createAmazonMotors operation.
 * @package     OpenAPI\Client
 */
class CreateAmazonMotorsRequestTest extends TestCase
{

    private CreateAmazonMotorsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateAmazonMotorsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateAmazonMotorsRequest"
     */
    public function testCreateAmazonMotorsRequest()
    {
        $this->assertInstanceOf(CreateAmazonMotorsRequest::class, $this->model);
    }

    /**
     * Test attribute "attachments"
     */
    public function testPropertyAttachments()
    {
        $testValue = [];
        
        $this->model->setAttachments($testValue);
        $this->assertEquals($testValue, $this->model->getAttachments());
    }
}
