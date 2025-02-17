<?php
/**
 * CreateLegalDisclosureRequestTest
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
use SpApi\Model\messaging\v1\CreateLegalDisclosureRequest;

/**
 * CreateLegalDisclosureRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createLegalDisclosure operation.
 * @package     SpApi
 */
class CreateLegalDisclosureRequestTest extends TestCase
{

    private CreateLegalDisclosureRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateLegalDisclosureRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateLegalDisclosureRequest"
     */
    public function testCreateLegalDisclosureRequest()
    {
        $this->assertInstanceOf(CreateLegalDisclosureRequest::class, $this->model);
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
