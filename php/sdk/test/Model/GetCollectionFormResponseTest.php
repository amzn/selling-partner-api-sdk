<?php
/**
 * GetCollectionFormResponseTest
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
use SpApi\Model\shipping\v2\GetCollectionFormResponse;

/**
 * GetCollectionFormResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GetCollectionFormResponse operation.
 * @package     SpApi
 */
class GetCollectionFormResponseTest extends TestCase
{

    private GetCollectionFormResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetCollectionFormResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetCollectionFormResponse"
     */
    public function testGetCollectionFormResponse()
    {
        $this->assertInstanceOf(GetCollectionFormResponse::class, $this->model);
    }

    /**
     * Test attribute "collections_form_document"
     */
    public function testPropertyCollectionsFormDocument()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\CollectionsFormDocument();
        
        $this->model->setCollectionsFormDocument($testValue);
        $this->assertEquals($testValue, $this->model->getCollectionsFormDocument());
    }
}
